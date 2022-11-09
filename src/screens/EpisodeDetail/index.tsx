import React, {useEffect, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
  characterActions,
  characterSelectors,
} from '../../store/slices/productSlice';
import store from '../../store';

export interface Iparams {
  id: number;
  name: string;
}

const EpisodeDetails = () => {
  const {params}: any = useRoute();

  console.log('params', params);

  const getData = useCallback(() => {
    store.dispatch(characterActions.getEpisodeListByIdAT(params?.id));
  }, [store]);

  useEffect(() => {
    if (params?.id) {
      getData();
    }
  }, [getData, params?.id]);

  const data = useSelector(characterSelectors.episodeById);

  console.log('32 data :>> ', data?.data);

  return (
    <View>
      {data?.data?.characters?.length > 1 && (
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View>
                <Text>{data.data.name}</Text>
                <Text>{data.data.episode}</Text>
                <Text>{data.data.air_date}</Text>
              </View>
            );
          }}
          data={data?.data?.characters}
          renderItem={({item}: any, index: number) => {
            console.log('item :>> ', item);
            return (
              <View key={index + 20}>
                <Text>{item.toString()}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default EpisodeDetails;
