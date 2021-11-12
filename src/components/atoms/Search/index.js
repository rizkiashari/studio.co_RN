import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {IconSearch} from '../../../assets';
import {colors} from '../../../utils';

const Search = ({onPress, type}) => {
  if (type === 'search') {
    return (
      <View style={styles.search} onPress={onPress}>
        <TouchableOpacity style={styles.wrapperSearch}>
          <IconSearch />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="search" />
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.wrapperSearch}>
        <IconSearch />
      </View>
      <Text style={styles.input}>Search</Text>
    </TouchableOpacity>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.field.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  search: {
    backgroundColor: colors.field.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  wrapperSearch: {
    zIndex: 1,
    padding: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  placeholder: {
    color: '#ddd',
  },
});
