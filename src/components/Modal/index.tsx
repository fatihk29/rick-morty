import React, {FC} from 'react';
import {View, Text, Modal, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICharacterItem} from '../../types';
import styles from './styles';

interface ModalCompProps {
  modalVisible: boolean;
  choosen: ICharacterItem;
  setModalVisible: Function;
}

const ModalComp: FC<ModalCompProps> = ({
  modalVisible,
  choosen,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible((prev: any) => !prev);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.addModalHeader}>
            <TouchableOpacity
              style={styles.button}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              onPress={() => setModalVisible((prev: any) => !prev)}>
              <Text style={{textAlign: 'center', color: 'white'}}>X</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.modalText}>{choosen?.name}</Text>
            <Image source={{uri: choosen.image}} style={styles.image} />
            <Text style={styles.modalText}>{choosen?.gender}</Text>
          </View>
          <View>
            <Text style={styles.modalText}>
              {'Species:  '}
              {choosen?.species}
            </Text>
            <Text style={styles.modalText}>
              {'Status:  '}
              {choosen?.status}
            </Text>
            <Text style={styles.modalText}>
              {'Created Date:  '}
              {choosen?.created?.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalComp;
