import { Image } from "expo-image";
import React, { memo } from "react";
import { Text, View } from "react-native";
import { Card } from "../ui";
import { styles } from "./card-user-information.styles";
import { ICardUserInformationProps } from "./card-user-information.types";

export function CardUserInformation({ user }: ICardUserInformationProps) {
  return (
    <View style={styles.containerCards}>
      <Card className={styles.containerCard}>
        <View style={styles.contentCard}>
          <View style={styles.firstContainer}>
            <Text style={styles.nameStyle} numberOfLines={1}>
              {user?.name} {user?.lastName}
            </Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.points}>{user?.points}</Text>
              <Text style={styles.pointsText}>Puntos</Text>
            </View>
          </View>
          <View style={styles.secondContainer}>
            <Text style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/react-logo.png")}
                style={styles.imageStyles}
              />
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default memo(CardUserInformation);
