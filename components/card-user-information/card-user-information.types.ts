interface IUserInformation {
  name: string;
  lastName: string;
  points?: number;
}

export interface ICardUserInformationProps {
  user: IUserInformation;
}
