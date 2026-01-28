import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { memo, useState } from "react";
import { Image, Modal, Text, View } from "react-native";
import { CameraComponent } from "../camera/camera";
import { Card } from "../ui";
import { Button } from "../ui/button/button";
import { styles } from "./card-user-information.styles";
import { ICardUserInformationProps } from "./card-user-information.types";

export function CardUserInformation({
  user,
  qtyNotes,
}: ICardUserInformationProps) {
  const [showCamera, setShowCamera] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string | null>(null); // Para guardar la foto tomada

  return (
    <View style={styles.containerCards}>
      {showCamera && (
        <Modal visible={showCamera} animationType="slide" transparent={false}>
          <CameraComponent
            onClose={() => setShowCamera(false)}
            onPhotoTaken={(uri) => {
              setUserPhoto(uri);
              setShowCamera(false);
            }}
          />
        </Modal>
      )}
      <Card className={styles.containerCard}>
        <View style={styles.firstContainer}>
          <Text style={styles.nameStyle} numberOfLines={1}>
            {user?.name} {user?.lastname}
          </Text>
          <View style={styles.notesContainer}>
            <View style={styles.qtyNotesContainer}>
              <Text style={styles.qtyNotes}>{qtyNotes}</Text>
              <Ionicons
                style={styles.checkmark}
                name="checkmark-circle"
                color={Colors.greenColor}
                size={15}
              />
            </View>
            <Text style={styles.notesText}>Notas agregadas</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <View style={styles.separatorSettings} >
            <Button
              style={styles.imageContainer}
              onPress={() => setShowCamera(true)}
            >
              {userPhoto ? (
                <Image source={{ uri: userPhoto }} style={styles.photoStyle} />
              ) : (
                <Ionicons
                  name="camera-sharp"
                  color={Colors.grayColor}
                  size={25}
                />
              )}
            </Button>

            <View
              style={styles.settingsIcon}
            >
              <Ionicons
                name="settings-sharp"
                color={Colors.whiteColor}
                size={25}

              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default memo(CardUserInformation);
