import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';

// project imports
import styles from './styles';
import TemplateCV1 from '../../components/TemplateCV1';

const CreateTemplate: FC<any> = ({route}) => {
  useEffect(() => {
    if (route) {
      console.log('route', route.params.item);
    }
  }, [route]);

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
