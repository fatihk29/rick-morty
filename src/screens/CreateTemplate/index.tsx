import React, {FC} from 'react';
import {View} from 'react-native';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';

// project imports
import styles from './styles';
import EditCV from '../../components/EditCV';

const CreateTemplate: FC<any> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.animated}>
        <ReactNativeZoomableView
          maxZoom={30}
          contentWidth={600}
          contentHeight={800}
          style>
          {/* <Image
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/assets%2Fzurich1.jpg?alt=media&token=8c900be1-b6d6-427d-9739-1f637d8369e6',
            }}
          /> */}
          <EditCV />
        </ReactNativeZoomableView>
      </View>
    </View>
  );
};

export default CreateTemplate;
