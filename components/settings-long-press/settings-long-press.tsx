import { ColorOpacity, Colors } from '@/constants';
import { Text, View } from 'react-native';
import { Button } from '../ui/button';
import { styles } from './settings-long-press.style';
import { ISettingsLongPressProps } from './settings-long-press.type';

export const SettingsLongPressComponent = ({ cameraAction, content, hasOpacity, title, onUpdatePhotoNote }: ISettingsLongPressProps) => {
    return (
        <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Configuración de nota</Text>
                <Text style={styles.modalSubTitle}>Estas configurando la nota <Text style={styles.strongText}>{title}</Text></Text>
                {cameraAction}
            </View>
            {content}
            <Button
                style={{ ...styles.saveButton, backgroundColor: hasOpacity ? ColorOpacity(Colors.mainColor, 80) : Colors.mainColor }}
                onPress={onUpdatePhotoNote}
            >
                <Text style={styles.saveButtonText}>GUARDAR</Text>
            </Button>
        </View>
    )
}
