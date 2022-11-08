import React, {useEffect, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
// import {getEpisodeDetailAction} from '../../store/modules/app/actions';

import {useDispatch, useSelector} from 'react-redux';

const EpisodeDetails = () => {
  const {params} = useRoute();

  const dispatch = useDispatch();

  const {episodeDetail} = useSelector((state: any) => state.app);

  // const getData = useCallback(() => {
  //   // dispatch(getEpisodeDetailAction.request(params.id));
  // }, [dispatch, params?.id]);

  // useEffect(() => {
  //   getData();
  // }, [getData]);

  return (
    <FlatList
      ListHeaderComponent={() => {
        return (
          <View>
            <Text>{episodeDetail.name}</Text>
            <Text>{episodeDetail.episode}</Text>
            <Text>{episodeDetail.air_date}</Text>
          </View>
        );
      }}
      data={episodeDetail.characters}
      renderItem={(item: any, index: number) => {
        return (
          <View key={index + 20}>
            <Text>{item.toString()}</Text>
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default EpisodeDetails;
