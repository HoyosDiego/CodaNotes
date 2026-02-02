import { ColorOpacity, Colors } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Button } from '../ui/button';
import { styles } from './settings-long-press.style';
import { ISettingsLongPressProps } from './settings-long-press.type';

export const SettingsLongPressComponent = ({ title, content }: ISettingsLongPressProps) => {
    return (
        <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Configuración de nota</Text>
                <Text style={styles.modalSubTitle}>Estas configurando la nota <Text style={styles.strongText}>{title}</Text></Text>
                <Ionicons
                    name="camera"
                    size={65}
                    color="#D9D9D9"
                />
            </View>
            {!content && <View style={styles.emptyStateContainer}>
                <Text style={styles.emptyStateText}>
                    Una vez seleccionada o tomada la foto tendrá una vista preliminar antes de guardar
                </Text>
            </View>}
            <Button style={{ ...styles.saveButton, backgroundColor: !content ? ColorOpacity(Colors.mainColor, 80) : Colors.mainColor }} >
                <Text style={styles.saveButtonText}>GUARDAR</Text>
            </Button>
        </View>
    )
}
