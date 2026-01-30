import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Button } from '../ui/button';
import { styles } from './settings-long-press.style';
import { ISettingsLongPressProps } from './settings-long-press.type';

export const SettingsLongPressComponent = ({ title }: ISettingsLongPressProps) => {
    return (
        <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Configuración de nota</Text>
                <Text style={styles.modalSubTitle}>Estas configurando la nota <Text style={styles.strongText}>{title}</Text></Text>
                <Ionicons
                    name="camera"
                    size={65}
                    color="#E5E5E5"
                />
            </View>
            <View style={styles.emptyStateContainer}>

                <Text style={styles.emptyStateText}>
                    Una vez seleccionada o tomada la foto tendrá una vista preliminar antes de guardar
                </Text>
            </View>
            <Button style={styles.saveButton}>
                <Text style={styles.saveButtonText}>GUARDAR</Text>
            </Button>
        </View>
    )
}
