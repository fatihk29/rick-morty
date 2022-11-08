import React, {FC, useEffect, useCallback, useRef} from 'react';
import {FlatList, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import {searchUsersAction} from '../../store/modules/app/actions';
import {EpisodeCard} from '../../components/EpisodeCard';
import {
  characterActions,
  characterSelectors,
} from '../../store/slices/productSlice';

import store from '../../store';
import styles from './styles';

const EpisodePage: FC<any> = () => {
  const dispatch = useDispatch();
  const flatlistRef = useRef();
  const navigation = useNavigation();
  const app = useSelector((state: any) => state.app);

  const getProductsData = useCallback(() => {
    store.dispatch(characterActions.getEpisodeListAT());
  }, [store]);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  const data = useSelector(characterSelectors.episode);

  console.log("data", data?.data?.results);
  

  const onPressCharacter = (character: any) => {
    navigation.navigate('EpisodeDetails', {
      id: character.id,
      name: character.name,
    });
  };

  return (
    <FlatList
      ref={flatlistRef}
      data={data?.data?.results}
      renderItem={({item}) => {
        return (
          <EpisodeCard
            key={item.name}
            item={item}
            onPress={() => onPressCharacter(item)}
          />
        );
      }}
      // ItemSeparatorComponent={() => <View style={STYLES.separator} />}
      // ListFooterComponent={renderFooter}
      contentContainerStyle={styles.list}
      keyExtractor={item => `${item.id}`}
      onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.2}
    />
  );
};

export default EpisodePage;
