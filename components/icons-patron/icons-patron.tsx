import React, { useMemo, useState } from "react";
import { Image, LayoutChangeEvent, View } from "react-native";
import { styles } from "./icons-patron.style";

interface IconsPatronProps {
    uri: string;
    iconSize?: number;
    gap?: number;
}

export default function IconsPatron({ uri, iconSize = 28, gap = 25 }: IconsPatronProps) {
    const [widthLayout, setWithLayout] = useState(0);
    const [heightLayout, setHeightLayout] = useState(0);
    const onLayout = (event: LayoutChangeEvent) => {
        const { width, height } = event.nativeEvent.layout;
        console.log('event.nativeEvent.layout ', event.nativeEvent.layout);
        setWithLayout(width);
        setHeightLayout(height);
    };

    const iconSizeWithGap = iconSize + gap;
    const iconSizewithWidth = Math.round(widthLayout / iconSizeWithGap);
    const iconSizewithHeight = Math.round(heightLayout / iconSizeWithGap);

    const IconsView = useMemo(() => {
        if (widthLayout === 0 || heightLayout === 0) { return null; }

        const columns = iconSizewithWidth;
        const rows = iconSizewithHeight;
        const icons = [];

        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                const baseX = i * (iconSize + gap) + gap;
                const baseY = j * (iconSize + gap) + gap;

                const randomShift = gap * 0.5;
                const finalX = baseX + (Math.random() - 0.8) * randomShift;
                const finalY = baseY + (Math.random() - 0.8) * randomShift;

                icons.push(
                    <Image
                        key={`${i}-${j}`}
                        source={{ uri }}
                        style={[
                            styles.image,
                            {
                                position: 'absolute',
                                width: iconSize,
                                height: iconSize,
                                borderRadius: iconSize / 2,
                                left: finalX,
                                right: finalX,
                                top: finalY,
                                transform: [{ rotate: `${Math.random() * 90}deg` }]
                            }
                        ]}
                    />
                );
            }
        }
        return icons;
    }, [widthLayout, heightLayout, uri, iconSize, gap]);

    return (
        <View style={styles.container} onLayout={onLayout}>
            {IconsView}
        </View>
    );
}