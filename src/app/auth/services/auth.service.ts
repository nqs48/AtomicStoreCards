import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
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
} from '@angular/fire/firestore';
import { LoginModel } from '../interface/login.Model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private $authService: Auth, private $firestore: Firestore) {
    // this.$authService.currentUser.then((user) => {
    //   if (!user) {
    //     return;
    //   }
    //   this.currentUser.uid = user.uid;
    //   this.currentUser.userName = user.displayName;
    //   this.currentUser.email = user.email;
    //   this.currentUser.photoUrl = user.photoURL;
    // });
    // this.$authService.authState.subscribe((user) => {
    //   if (!user ) {
    //     return;
    //   }
    //   this.currentUser.uid = user.uid;
    //   this.currentUser.userName = user.displayName;
    //   this.currentUser.email = user.email;
    //   this.currentUser.photoUrl = user.photoURL;
    //   console.log('Estado del usuario: ', user);
    //   console.log('Foto del usuario: ', this.currentUser.photoUrl);
    // });
  }

  currentUserValue() {
    return this.$authService.currentUser;
  }




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

  // createUser(user: UserModel) {
  //   const userRef = collection(this.$firestore, 'users');
  //   return addDoc(userRef, user);
  // }
}

