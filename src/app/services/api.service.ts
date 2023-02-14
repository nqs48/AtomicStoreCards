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

  listApi: any;
  cardList!: CardModel[];

  constructor(private httpService$: HttpClient, private $firestore: Firestore) {

    //TODO IMPROVE THE METHOD TO MAP THE CARDS
    //  this.getData().subscribe((data:any) => {
    //   this.listApi=data.results
    //   this.cardList= this.listApi.map((e: any) => {
    //     return {
    //       uid: e.id,
    //       name: e.name,
    //       status: e.status,
    //       species: e.species,
    //       cantity: 5,
    //       price: this.randomPrice(5,240),
    //       photoUrl: e.image,
    //       avalaible: true,
    //     }
    //   });

    //   this.cardList.forEach((element: any) => {
    //       addDoc(this.refCollectionCards, element);
    //     });

    //   console.log(this.cardList);
    // });

  }

    //TODO VALIDATE IF CARD COLLECTION EXITS
    //Validating if collection exits
    // async validateCollection(){

    //   const docRef= doc(this.$firestore,"cards")
    //   const docSnap= await getDoc(docRef);

    //   if(docSnap.exists()){
    //     console.log('Collection exists');
    //      console.log("Document data:", docSnap.data());
    //   }else{
    //     console.log('Collection does not exists');
    //     this.cardList.forEach((element: any) => {
    //       addDoc(this.refCollectionCards, element);
    //     });
    //   }

    // }

    randomPrice(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

    //Get Data from Public API
    getData(){
      return this.httpService$.get('https://rickandmortyapi.com/api/character?page=3');
    }

    getCardsFirebase(): Observable<CardModel[]>{
      const cards= collectionData(this.refCollectionCards,{idField: 'uid'}) as Observable<CardModel[]>
      return cards;
    }

    updateCardFirestore(card: CardModel) {
    return setDoc(doc(this.refCollectionCards,card.uid),card);

  }







}

