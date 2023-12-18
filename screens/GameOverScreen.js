import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colours';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ startNewGame, rounds, userNumber }) => {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.summaryTextHighlight}>{rounds}</Text> rounds to guess the value <Text
        style={styles.summaryTextHighlight}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  summaryTextHighlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});

export default GameOverScreen;