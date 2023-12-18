import { StyleSheet, Text } from 'react-native';

const Title = ({children}) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    borderColor: 'white',
    fontFamily: 'open-sans-bold'
  }
})

export default Title;