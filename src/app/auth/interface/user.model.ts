import { CardModel } from "./card.model";


export interface UserModel {
  uid?: string;
  userName: string | null | undefined;
  email: string | null | undefined;
  photoUrl: string | null | undefined;
  cards: CardModel[];
  cash: number;
  cashForDay: number;
}
