import { UserInput } from "@/services";

export interface UserModalProps {
    userInformation: UserInput;
    onchangeUser: (user: UserInput) => void;
    onSave: () => void;
}
