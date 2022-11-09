import React, {FC, useEffect, useCallback, useState} from 'react';
import {FlatList, Platform} from 'react-native';
import {useSelector} from 'react-redux';


import {CharacterCard} from '../../components/CharacterCard';
import ModalComp from '../../components/Modal';
import {
  characterActions,
  characterSelectors,
} from '../../store/slices/productSlice';
import store from '../../store';

const CharacterList: FC<any> = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [choosen, setChoosen] = useState([]);

  const onPress = (item: any) => {
    setChoosen(item);
    setModalVisible(prev => !prev);
  };

  const getProductsData = useCallback(() => {
    store.dispatch(characterActions.getCharacterListAT());
  }, [store]);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  const data = useSelector(characterSelectors.character);

  return (
    <FlatList
      ListHeaderComponent={() => {
        return (
          <ModalComp
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            choosen={choosen}
          />
        );
      }}
      data={data?.data?.results}
      renderItem={({item}) => {
        return <CharacterCard item={item} onPress={onPress} />;
      }}
      keyExtractor={item => `${item.id}`}
      onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.2}
    />
  );
};

export default CharacterList;
