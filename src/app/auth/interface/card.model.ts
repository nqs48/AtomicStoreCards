export interface CardModel {
  uid?: string;
  name: string | null | undefined;
  status: string | null | undefined;
  species: string | null | undefined;
  cantity: number;
  price: number;
  photoUrl: string | null | undefined;
  avalaible: boolean | null | undefined;
}
