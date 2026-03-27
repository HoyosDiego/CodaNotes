import { ColorOpacity, Colors } from '@/constants';
import { Text, View } from 'react-native';
import { Button } from '../ui/button';
import InputText from '../ui/input-text/input-text';
import { ISettingsProfileProps } from './settings-profile';
import { styles } from './settings-profile.style';

export const SettingsProfile = ({
    name,
    lastname,
    hasOpacity = true,
    onClickUpdateUser,
    onUpdateName,
    onUpdateLastname,
    cameraAction }: ISettingsProfileProps) => {

    return (
        <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Configuración del perfil</Text>
            </View>
            <View>
                <Text style={[styles.label, { backgroundColor: Colors.mainColor }]}>Título</Text>

                <InputText
                    style={styles.customInputText}
                    containerStyle={styles.customInputContainer}
                    placeholder={'Nombre'}
                    defaultValue={name}
                    onChangeText={(value) => {
                        onUpdateName?.(value);
                    }
                    }
                />

                <Text style={[styles.label, { backgroundColor: Colors.mainColor }]}>Descripción</Text>

                <InputText
                    style={styles.customInputText}
                    containerStyle={styles.customInputContainer}
                    placeholder={'Apellido'}
                    defaultValue={lastname}
                    onChangeText={(value) => {
                        onUpdateLastname?.(value);
                    }}
                />

                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                    <Text style={styles.labelPhoto}>Foto</Text>
                    <View style={{ width: 90, height: 90, borderRadius: 50, alignSelf: 'center', marginTop: 20 }}>
                        {cameraAction}
                    </View>
                </View>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: 20,
                justifyContent: 'flex-end'

            }}>
                <Button
                    style={{ ...styles.saveButton, backgroundColor: hasOpacity ? ColorOpacity(Colors.mainColor, 80) : Colors.mainColor }}
                    onPress={onClickUpdateUser}
                >
                    <Text style={styles.saveButtonText}>GUARDAR</Text>
                </Button>
            </View>
        </View>
    )
}
