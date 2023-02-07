import { CardModel } from "./card.model";


export interface UserModel {
  uid?: string | null;
  userName: string | null;
  email: string | null;
  photoUrl: string | null;
  cards: CardModel[] | null;
  cash: number | null;
  cashForDay: number | null;
}
