/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {
  IconEmail,
  IconName,
  IconPasswordHide,
  IconPasswordShow,
  IconTelp,
} from '../../../assets';
import {colors} from '../../../utils';

const Input = ({
  placeholder,
  secureTextEntry,
  disable,
  value,
  onChangeText,
  type,
  number,
}) => {
  const [border, setBorder] = useState(colors.secondary);
  const [secure, setSecure] = useState(!secureTextEntry);

  const onFocusForm = () => {
    setBorder(colors.border);
  };

  const onBlurForm = () => {
    setBorder(colors.ternatry);
  };

  const secureChange = () => {
    setSecure(!secure);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secure}
        style={styles.input(border)}
        editable={!disable}
        keyboardType={number ? 'numeric' : 'default'}
        selectTextOnFocus={!disable}
      />
      <View style={styles.icon}>
        {type === 'nama' && <IconName />}
        {type === 'email' && <IconEmail />}
        {type === 'password' && (
          <TouchableOpacity onPress={secureChange}>
            {secure ? <IconPasswordHide /> : <IconPasswordShow />}
          </TouchableOpacity>
        )}
        {type === 'telp' && <IconTelp />}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  input: border => ({
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    borderColor: border,
    paddingLeft: 16,
    fontSize: 16,
  }),
  icon: {position: 'absolute', right: 16},
});
