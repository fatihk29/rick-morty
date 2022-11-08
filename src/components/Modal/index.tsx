import React, {FC} from 'react';
import {View, Text, Modal, Pressable, Image} from 'react-native';
import styles from './styles';

const ModalComp: FC<any> = ({modalVisible, choosen, setModalVisible}) => {
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
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible((prev: any) => !prev)}>
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
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
              {choosen?.created?.toLocaleString('en-US')}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalComp;
