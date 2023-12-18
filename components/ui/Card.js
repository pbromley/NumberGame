import Colors from '../../constants/Colours';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => (
  <View style={styles.mainView}>{children}</View>
);

const styles = StyleSheet.create({
  mainView: {
    padding: 16,
    marginTop: 50,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Card;
