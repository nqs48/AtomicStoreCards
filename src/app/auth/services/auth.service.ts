import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, reload, signInWithEmailAndPassword, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { UserModel } from '../interface/user.model';
import firebase from 'firebase/compat/app';
import {
  CollectionReference,
  collection,
  Firestore,
  doc,
  setDoc,
  collectionData,
  where,
  query,
  addDoc,
  DocumentReference,
} from '@angular/fire/firestore';
import { LoginModel } from '../interface/login.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

 currentUserClass!: User | null;
 currentUserMapped!: UserModel;

 private refCollectionUser: any = collection(
    this.$firestore,'users');


  constructor(private $authService: Auth, public $firestore: Firestore) {
    this.currentUserClass= this.$authService.currentUser;
  }


  //Login and register
  register({ email, password }: LoginModel) {
    return createUserWithEmailAndPassword(this.$authService, email, password);
  }

  login(user: LoginModel) {
    return signInWithEmailAndPassword(
      this.$authService,
      user.email,
      user.password
    );
  }

  loginWithGoogle() {
    return signInWithPopup(
      this.$authService,
      new GoogleAuthProvider()
    );
  }

  logout() {
    return signOut(this.$authService);
  }


  //ACTIONS WITH THE USER

  currentUserValue() {
    const userMapped: UserModel= {
      uid: this.currentUserClass?.uid,
      userName: this.currentUserClass?.displayName,
      email: this.currentUserClass?.email,
      photoUrl: this.currentUserClass?.photoURL,
      cards: [],
      cash: 5,
      cashForDay: 0,
    };
    return userMapped;
  }

  addNewUserToFirestore(user: UserModel) {
    return addDoc(this.refCollectionUser, user);
  }

  getUserFirestore() : Observable<UserModel[]>{
    if(!this.currentUserClass?.uid){
      window.location.reload()
    }
    const q = query(this.refCollectionUser, where('uid', '==', this.currentUserClass?.uid));
    return collectionData(q) as Observable<UserModel[]>;
  }

  updateUserFirestore(user: UserModel) {
    return setDoc(doc(this.refCollectionUser,user.uid),user);

  }





}

