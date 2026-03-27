import { UserInput } from "@/services";

export interface UserModalProps {
    userInformation: UserInput;
    onchangeUser: (user: UserInput, photo_uri?: string) => void;
    onSave: () => void;
}
