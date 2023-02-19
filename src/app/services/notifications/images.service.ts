import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imageLogo= 'https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-PNG-HD-Quality.png'
  imageCrying: string= "https://media1.giphy.com/media/fXzA0KYfjTPjWLzmPj/giphy.gif?cid=ecf05e47xnwkicjyrpyb5bsnjvwxedhxgfht4vpxsk1yw6vm&rid=giphy.gif&ct=g";
  imageHappy: string='https://media4.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif?cid=ecf05e47hedy736ne531o8lb99z48erk24rzae3fh59bdcsz&rid=giphy.gif&ct=g';
  imageHappyMoney: string='https://media4.giphy.com/media/31ee5G7Adb4DJLA87B/giphy.gif?cid=ecf05e47h3rphqk5jv0hxbrnkkqfvcpezcko7pjfl96mcgey&rid=giphy.gif&ct=g';
  imageError: string= 'https://media2.giphy.com/media/uZrLs0rcNc9sA/giphy.gif?cid=ecf05e47wyofu825drz59gawi4978baph7ka0v5hbis4ppun&rid=giphy.gif&ct=g';
  imageToUser: string = "https://media0.giphy.com/media/YqQgE16R7otdW2jp66/giphy.gif";
  imageNotAvailable= "https://media0.giphy.com/media/RH1IFq2GT0Oau8NRWX/giphy.gif?cid=ecf05e47ngrrvr34ttom2xrt697xv2f1rt9cjfnujpdh6j43&rid=giphy.gif&ct=g";
  imageNotFound: string = "https://media4.giphy.com/media/Opm31LCucRc3qG0VqB/giphy.gif?cid=ecf05e473x9235eun3edvkv3kztkjx6ghgud9k2a6kj8lbuv&rid=giphy.gif&ct=g";
  imageLogout: string = "https://media1.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif?cid=ecf05e47ef907i1o41w5bqdpqtadl5vo0jik5h8apd37qw66&rid=giphy.gif&ct=g";
  imageGetting= "https://media4.giphy.com/media/cODrlNTkGnZGVtVagd/giphy.gif?cid=ecf05e47wa3v3huizbo1dx2zjt6kk0wy35owob23pwg9q1pk&rid=giphy.gif&ct=g";
  constructor() { }
}
