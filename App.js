import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import colors from './constants/Colours';

export default function App() {
  const [gameNumber, setGameNumber] = useState(null);
  const [isGameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  const resetGame = () => {
    setGameNumber(null);
    setGameOver(false);
  }

  const pickedNumberHandler = (num) => {
    setGameNumber(num);
  };

  let screen = <StartGameScreen pickNumber={pickedNumberHandler}/>;

  if (gameNumber) {
    screen = <GameScreen userNumber={gameNumber} onGameOver={setGameOver} setRounds={setRounds}/>;
  }

  if (isGameOver) {
    screen = <GameOverScreen startNewGame={resetGame} userNumber={gameNumber} rounds={rounds}/>;
  }

  return (

    <LinearGradient style={styles.mainView} colors={[colors.primary700, '#ddb52f']}>
      <ImageBackground source={require('./assets/images/background.png')}
                       resizeMode="cover"
                       style={styles.mainView}
                       imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.mainView}>
          {screen}
        </SafeAreaView>
        <StatusBar style="auto"/>
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
