import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
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
      <View style={styles.animated}>
        <ReactNativeZoomableView
          maxZoom={30}
          contentWidth={600}
          contentHeight={800}
          style>
          <TemplateCV1 />
        </ReactNativeZoomableView>
      </View>
    </View>
  );
};

export default CreateTemplate;
