import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const InputDetail = ({disable, value, onChangeText, number, label}) => {
  const [border, setBorder] = useState(colors.secondary);

  const onFocusForm = () => {
    setBorder(colors.border);
  };

  const onBlurForm = () => {
    setBorder(colors.ternatry);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        editable={!disable}
        keyboardType={number ? 'numeric' : 'default'}
        selectTextOnFocus={!disable}
        onChangeText={onChangeText}
        style={styles.input(border)}
      />
    </View>
  );
};

export default InputDetail;

const styles = StyleSheet.create({
  wrapper: {},
  label: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.black,
  },
  input: border => ({
    flex: 1,
    borderBottomWidth: 1,
    borderColor: border,
    paddingLeft: 16,
    marginTop: 4,
    fontSize: 16,
  }),
});
