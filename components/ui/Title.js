import { StyleSheet, Text, Platform } from 'react-native';

const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    borderColor: 'white',
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
    width: 300
  }
});

export default Title;