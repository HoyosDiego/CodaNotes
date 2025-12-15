import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import { Text, View } from "react-native";
import { Card } from "../ui";
import { styles } from "./card-user-information.styles";
import { ICardUserInformationProps } from "./card-user-information.types";

export function CardUserInformation({
  user,
  qtyNotes,
}: ICardUserInformationProps) {
  return (
    <View style={styles.containerCards}>
      <Card className={styles.containerCard}>
        <View style={styles.contentCard}>
          <View style={styles.firstContainer}>
            <Text style={styles.nameStyle} numberOfLines={1}>
              {user?.name} {user?.lastname}
            </Text>
            <View style={styles.notesContainer}>
              <View style={styles.qtyNotesContainer}>
                <Text style={styles.qtyNotes}>{qtyNotes}</Text>
                <Ionicons
                  name="checkmark-circle"
                  color={Colors.greenColor}
                  size={18}
                />
              </View>
              <Text style={styles.notesText}>Notas agregadas</Text>
            </View>
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.imageContainer}>
              <Ionicons
                name="person-outline"
                color={Colors.grayColor}
                size={45}
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default memo(CardUserInformation);
