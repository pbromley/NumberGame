import { Alert, Dimensions, FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/ui/GuessLogItem';

let minBoundary = 1;
let maxBoundary = 100;

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
};

const GameScreen = ({ userNumber, onGameOver, setRounds }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userNumber));
  const [guesses, setGuesses] = useState([currentGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      setRounds(guesses.length);
      onGameOver(true);
    }
  }, [currentGuess, userNumber, onGameOver, guesses]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessesLength = guesses.length;

  const nextGuess = (direction) => {
    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert('Don\'t lie!!', 'You know this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const nextGuess = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setGuesses((current) => [nextGuess, ...current]);
    setCurrentGuess(nextGuess);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuess('lower')}>
              <Ionicons name="md-remove" size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuess('higher')}>
              <Ionicons name="md-add" size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>);

  if (width > 500) {
    content = <>
      <View style={styles.buttonsContainerWidth}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuess('lower')}>
            <Ionicons name="md-remove" size={24} color="white"/>
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuess('higher')}>
            <Ionicons name="md-add" size={24} color="white"/>
          </PrimaryButton>
        </View>
      </View>
    </>
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.logContainer}>
        <FlatList data={guesses} renderItem={({ item, index }) => <GuessLogItem roundNumber={guessesLength - index}>{item}</GuessLogItem>} keyExtractor={({ item }) => item}/>
      </View>
    </View>

  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    marginBottom: 12
  },
  logContainer: {
    padding: 16,
    flex: 1
  },
  buttonsContainerWidth:{
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default GameScreen;