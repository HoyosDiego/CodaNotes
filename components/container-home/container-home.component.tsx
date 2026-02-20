import { useThemeColor } from '@/hooks/use-theme-color';
import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './container-home.style';

const ContainerHomeComponent = ({ children }: PropsWithChildren) => {
    const insets = useSafeAreaInsets();
    const backgroundColor = useThemeColor({}, "background");

    return (
        <View
            style={[
                {
                    flex: 1,
                    backgroundColor,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                },
                styles.container,
            ]}
        >
            {children}
        </View>)
}

export default ContainerHomeComponent