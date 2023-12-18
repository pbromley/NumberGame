import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colours';

const GuessLogItem = ({ roundNumber, children }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>#{roundNumber}</Text>
    <Text style={styles.itemText}>Opponents guess: {children}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    borderColor: Colors.primary800,
    padding: 12,
    borderWidth: 1,
    borderRadius: 60,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  itemText: {
    fontFamily: 'open-sans'
  }
})

export default GuessLogItem;