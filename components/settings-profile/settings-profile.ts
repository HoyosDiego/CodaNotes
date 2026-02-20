import { ReactNode } from "react";

export interface ISettingsProfileProps {
    onClickUpdateUser?: () => void;
    hasOpacity?: boolean;
    cameraAction?: ReactNode,
    name?: string;
    lastname?: string;
    bgcolor?: string;
    onUpdateName?: (value?: string) => void;
    onUpdateLastname?: (value?: string) => void;
}