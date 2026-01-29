import { Colors } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import React, { PropsWithChildren } from 'react';
import { Modal, ScrollView, View } from 'react-native';
import { styles } from './modal.styles';
import { IModalUI } from './modal.types';

export const ModalUI = ({ isOpen, onClose, children }: PropsWithChildren<IModalUI>) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <Ionicons
                    style={styles.closeIcon}
                    name="close-circle-sharp"
                    color={Colors.redColor} size={30}
                    onPress={onClose} />
                <ScrollView style={styles.modalView}>
                    <View style={styles.containerContent}>
                        {children}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

