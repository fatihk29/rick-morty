import React, {FC} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Center, Text} from 'native-base';

// project imports
import CVItem from '../../components/CVItem';
import EmptyCVItem from '../../components/EmptyCVItem';
import styles from './styles';
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
  return (
    <SafeAreaView style={styles.container}>
      {/* <CreatePDF /> */}
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <CVItem item={item} navigation={navigation} />;
          }}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <Center>
              <Text height={5}>Total {data?.length} CV</Text>
            </Center>
          )}
        />
      ) : (
        <EmptyCVItem navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

export default ListCV;
