import React, {FC, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {Center, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// project imports
import CVItem from '../../components/CVItem';
import EmptyCVItem from '../../components/EmptyCVItem';
import styles from './styles';
import SelectLanguage from './SelectLanguage';
import {ScreenHeader} from '../../components/ScreenHeaders';
import {APP_ROUTER} from '../../navigation/app-router';
import LanguageModal from '../Modal/LanguageModal';
// import CreatePDF from '../../components/makepdf/createpdf';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    cvTitle: 'react-native developer',
    createdDate: '02/02/2023',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    cvTitle: 'react-native developer',
    createdDate: '02/02/2023',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    cvTitle: 'react-native developer',
    createdDate: '02/02/2023',
  },
];

interface ListCVProps {
  navigation: any;
}

const ListCV: FC<ListCVProps> = ({navigation}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  console.log('isLangOpen :>> ', isLangOpen);
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title={APP_ROUTER.SCREEN.listcv.tabBarLabel}
        iconAs={Ionicons}
        iconName="language-outline"
        onPress={() => {
          console.log('asd23');
          setIsLangOpen(prev => !prev);
        }}
        iconAs2={MaterialIcons}
        iconName2="more-vert"
      />
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <CVItem item={item} navigation={navigation} />;
          }}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <View>
              <Center>
                <Text height={5}>Total {data?.length} CV</Text>
              </Center>
            </View>
          )}
        />
      ) : (
        <EmptyCVItem navigation={navigation} />
      )}
      <LanguageModal setIsLangOpen={setIsLangOpen} isLangOpen={isLangOpen} />
    </SafeAreaView>
  );
};

export default ListCV;
