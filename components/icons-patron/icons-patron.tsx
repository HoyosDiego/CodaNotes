import React, { useMemo, useState } from "react";
import { Image, LayoutChangeEvent, View } from "react-native";
import { styles } from "./icons-patron.style";

// component can be reused in other parts such as the view of the notes

interface IconsPatronProps {
    // image URI
    uri: string;
    // size of each icon in pixels, default is 40
    iconSize?: number;
    // gap between icons in pixels, default is 15
    gap?: number;
}

export default function IconsPatron({ uri, iconSize = 40, gap = 15 }: IconsPatronProps) {
    // here we calculate the number of icons that will be displayed
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    const iconsCount = useMemo(() => {
        if (containerSize.width === 0 || containerSize.height === 0) return 0;

        const itemWidth = iconSize + gap;
        const itemHeight = iconSize + gap;

        const columns = Math.ceil(containerSize.width / itemWidth);
        const rows = Math.ceil(containerSize.height / itemHeight);

        return (columns * rows) + columns;
    }, [containerSize, iconSize, gap]);

    const onLayout = (event: LayoutChangeEvent) => {
        const { width, height } = event.nativeEvent.layout;
        setContainerSize({ width, height });
    };

    return (
        <View style={styles.container} onLayout={onLayout}>
            {containerSize.width > 0 && Array.from({ length: iconsCount }).map((_, index) => (
                <Image
                    key={index}
                    source={{ uri }}
                    style={[
                        styles.image,
                        { width: iconSize, height: iconSize, margin: gap / 2 }
                    ]}
                    resizeMode="contain"
                />
            ))}
        </View>
    );
}