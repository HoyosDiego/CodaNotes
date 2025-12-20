import { Card } from "@/components/ui";
import { ColorOpacity } from "@/constants";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { styles } from "./colors-content.style";
import { IColorsContent } from "./colors-content.types";

export function ColorsContent({
  note,
  children,
}: PropsWithChildren<IColorsContent>) {
  return (
    <View style={styles.footerContainer}>
      <Card
        className={[
          styles.cardColor,
          { backgroundColor: ColorOpacity(note.bgcolor, 40) },
        ]}
      >
        {children}
      </Card>
    </View>
  );
}
