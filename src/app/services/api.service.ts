import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardModel } from '../auth/interface/card.model';
import { Observable } from 'rxjs';
import { addDoc, collection, CollectionReference, doc, Firestore, collectionData, setDoc } from '@angular/fire/firestore';
import { initializeApp } from "firebase/app";
import { getDoc } from '@firebase/firestore';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private refCollectionCards: any = collection(
    this.$firestore,'cards');
  pages: number= 4;
  listApi: any[]=[];
  cardList!: CardModel[];

  constructor(private httpService$: HttpClient, private $firestore: Firestore) {}


    //Get Data from Public API
    getData(numPage: number){
      return this.httpService$.get(`https://rickandmortyapi.com/api/character/?page=${numPage}`);
    }

    //Mapping Data
    mapData():void{
      for(let index = 1; index <= this.pages; index++) {
        this.getData(index).subscribe((data:any) => {
          this.listApi=data.results
          this.cardList= this.listApi.map((e: any) => {
            return {
              uid: e.id,
              name: e.name,
              status: e.status,
              species: e.species,
              cantity: 5,
              price: this.randomPrice(5,120),
              photoUrl: e.image,
              avalaible: true,
            };
          });

          this.cardList.forEach((element: any) => {
            addDoc(this.refCollectionCards, element);
          });

          console.log(this.cardList);
        }).unsubscribe;
      }
    }

    //Get Random Price
    randomPrice(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
    }



    //Get Cards from Firestore
    getCardsFirebase(): Observable<CardModel[]>{
      const cards= collectionData(this.refCollectionCards,{idField: 'uid'}) as Observable<CardModel[]>
      return cards;
    }

    //Update Card
    updateCardFirestore(card: CardModel): Promise<void> {
    return setDoc(doc(this.refCollectionCards,card.uid),card);

  }







}

