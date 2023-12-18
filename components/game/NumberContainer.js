import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colours';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.accent500

  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontFamily: 'open-sans'
  }
});

export default NumberContainer;