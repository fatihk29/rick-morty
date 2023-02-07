import React, {FC} from 'react';
import {SafeAreaView, View, FlatList, Text, Image} from 'react-native';
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

const Item: FC<any> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.subContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('./duvar-resimleri-siyah-ve-beyaz-inek-manzara.jpg.jpg')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.cvTitle}>{item.cvTitle}</Text>
        </View>
      </View>
      {/* <Button gradient={GRADIENTS.dark}>
        <Text transform="uppercase" marginHorizontal={sizes.sm}>
          Save for later
        </Text>
      </Button> */}
      <Text style={styles.createdDate}>{item.createdDate}</Text>
    </View>
  );
};

const ListCV: FC<any> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return <Item item={item} />;
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ListCV;

export const GRADIENTS = {
  primary: ['#FF0080', '#7928CA'],
  secondary: ['#A8B8D8', '#627594'],
  info: ['#21D4FD', '#2152FF'],
  success: ['#98EC2D', '#17AD37'],
  warning: ['#FBCF33', '#F53939'],
  danger: ['#FF667C', '#EA0606'],

  light: ['#EBEFF4', '#CED4DA'],
  dark: ['#3A416F', '#141727'],

  // white: [String(COLORS.white), '#EBEFF4'],
  // black: [String(COLORS.black), '#141727'],

  divider: ['rgba(255,255,255,0.3)', 'rgba(102, 116, 142, 0.6)'],
  menu: [
    'rgba(255, 255, 255, 0.2)',
    'rgba(112, 125, 149, 0.5)',
    'rgba(255, 255, 255, 0.2)',
  ],
};
