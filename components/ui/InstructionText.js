import Colors from '../../constants/Colours';
import { Text, StyleSheet } from 'react-native';

const InstructionText = ({ children, style }) => (
  <Text style={[styles.instructionText, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
    fontFamily: 'open-sans'
  }
});

export default InstructionText;