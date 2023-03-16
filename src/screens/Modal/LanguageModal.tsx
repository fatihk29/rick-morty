import React, {FC, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Button, Modal, Stack, Center, View} from 'native-base';
import i18next from 'i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// project imports
import {languageOptions} from '../../i18n';

interface ILanguageModal {
  setIsLangOpen: any;
  isLangOpen: any;
}

const LanguageModal: FC<ILanguageModal> = ({setIsLangOpen, isLangOpen}) => {
  const [languages] = useState<any>(languageOptions);
  const [selectLangs, setSelectLangs] = useState(i18next.language);

  const insert = async (language: string) => {
    console.log('language', language);
    i18next.changeLanguage(language);
    // await AsyncStorage.setItem('selectedlanguage', language);
    setSelectLangs(language);
  };

  return (
    <Center flex={1} px="3">
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        space={2}>
        <Button onPress={() => setIsLangOpen(true)}>Top</Button>
      </Stack>
      <Modal
        isOpen={isLangOpen}
        onClose={() => setIsLangOpen(false)}
        safeAreaTop={true}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Select Language</Modal.Header>
          <Modal.Body>
            {/* <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl> */}
            {languages &&
              languages.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      insert(item.name);
                    }}>
                    <View style={styles.lang}>
                      <Text style={styles.languageColor}>
                        {item.description}
                      </Text>
                      {selectLangs === item.name && (
                        <Icon name="check-bold" size={25} color={'#aaa'} />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                // variant="ghost"
                // colorScheme="blueGray"
                onPress={() => {
                  setIsLangOpen(false);
                }}>
                Cancel
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

const styles = {
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
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
};

export default LanguageModal;
