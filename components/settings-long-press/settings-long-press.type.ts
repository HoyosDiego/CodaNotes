import { ReactNode } from "react";

export interface ISettingsLongPressProps {
    title: string,
    content?: ReactNode,
    cameraAction?: ReactNode,
    hasOpacity?: boolean,
}