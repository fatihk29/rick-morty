import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

// project imports
import styles from './styles';
import TemplateCV1 from '../../components/TemplateCV1';

interface CreateTemplateProps {
  route: any;
}

const CreateTemplate: FC<CreateTemplateProps> = ({route}) => {
  useEffect(() => {
    if (route) {
      // console.log('route', route?.params?.item);
    }
  }, [route]);
  const pageInfo = useRoute();
  console.log('109', pageInfo.name);

  return (
    <View style={styles.container}>
      <TemplateCV1 />
    </View>
  );
};

export default CreateTemplate;
