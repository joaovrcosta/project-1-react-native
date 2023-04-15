import {TextInput, StyleSheet} from 'react-native';

export function Input({onChangeText}) {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={onChangeText}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
