import { Alert, Dimensions, StyleSheet, TextInput, View, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/Colours';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ pickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { height } = useWindowDimensions();
  const marginTop = height < 480 ? 30 : 100;

  const handleNumberUpdate = (val) => {
    setEnteredNumber(val);
  };

  const resetNumberHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be between 1 and 99', [{ text: 'OK', style: 'destructive', onPress: () => resetNumberHandler() }]);
      return;
    }

    pickNumber(chosenNumber);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <View style={styles.inputContainer}>
              <TextInput style={styles.numberInput}
                         maxLength={2}
                         keyboardType="number-pad"
                         autoCapitalize="none"
                         autoCorrect={false}
                         value={enteredNumber}
                         onChangeText={handleNumberUpdate}/>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: deviceHeight < 480 ? 30 : 100,
    alignItems: 'center',
    flex: 1
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    fontWeight: 'bold',
    marginVertical: 8,
    color: Colors.accent500,
    width: 50,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexGrow: 1
  },

});

export default StartGameScreen;