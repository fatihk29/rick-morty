import React, {FC, useState} from 'react';
import {
  // SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  // Dimensions,
  StyleSheet,
} from 'react-native';
import i18next from 'i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// project imports
import {languageOptions} from '../../i18n';

const SelectLanguage: FC<any> = () => {
  const [languages] = useState<any>(languageOptions);
  const [selectLangs, setSelectLangs] = useState(i18next.language);

  const insert = async (language: string) => {
    console.log('language', language);
    i18next.changeLanguage(language);
    // await AsyncStorage.setItem('selectedlanguage', language);
    setSelectLangs(language);
  };
  return (
    <View style={styles.selectContainer}>
      <ScrollView style={styles.list}>
        <View>
          {languages &&
            languages.map((item: any, index: any) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    insert(item.name);
                  }}>
                  <View style={styles.lang}>
                    <Text style={styles.languageColor}>{item.description}</Text>
                    {selectLangs === item.name && (
                      <Icon name="check-bold" size={25} color={'#aaa'} />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};
export default SelectLanguage;

// const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {},
  selectContainer: {
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  list: {
    // height: height,
    marginTop: 10,
  },
  lang: {
    borderBottomColor: 'rgba(0, 0, 0, .2)',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageColor: {
    marginVertical: 10,
    fontSize: 20,
  },
});
