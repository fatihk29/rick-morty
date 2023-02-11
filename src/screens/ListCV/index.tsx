import React, {FC} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

// project imports
import CVItem from '../../components/CVItem';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'ISIM SOYISIM',
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

const ListCV: FC<any> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return <CVItem item={item} navigation={navigation} />;
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ListCV;
