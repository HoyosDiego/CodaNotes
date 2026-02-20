import { User } from "@/services";
export interface ICardUserInformationProps {
  user: User | null;
  qtyNotes: number;
  hasOpacity?: boolean;
  handleSettings?: () => void;
  onUpdatePhotoUser?: (uri: string) => void;
}
