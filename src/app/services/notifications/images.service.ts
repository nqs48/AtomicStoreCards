import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imageCrying: string= "https://media3.giphy.com/media/afqT2ykIlYcVi/giphy.gif?cid=ecf05e476ff679hn1fes50wvgni396s70vomeu9fgd5o0b3a&rid=giphy.gif&ct=g";
  imageHappy: string='https://media4.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif?cid=ecf05e47hedy736ne531o8lb99z48erk24rzae3fh59bdcsz&rid=giphy.gif&ct=g';
  imageHappyMoney: string='https://media3.giphy.com/media/xT39DbK7o1MjKgVV7O/giphy.gif?cid=ecf05e47t77hlhskie9evhrupvuv4u95bmn00um1kx1h8o0j&rid=giphy.gif&ct=g';
  imageError: string= 'https://media2.giphy.com/media/uZrLs0rcNc9sA/giphy.gif?cid=ecf05e47wyofu825drz59gawi4978baph7ka0v5hbis4ppun&rid=giphy.gif&ct=g';
  imageToUser: string = "https://media2.giphy.com/media/Rgo50jdPhiJRiGQH9C/giphy.gif?cid=ecf05e475uihdpwz4hnn852cv5ekn67uxhuy9cywcrvb5dtz&rid=giphy.gif&ct=g";
  imageNotAvailable= "https://media0.giphy.com/media/RH1IFq2GT0Oau8NRWX/giphy.gif?cid=ecf05e47ngrrvr34ttom2xrt697xv2f1rt9cjfnujpdh6j43&rid=giphy.gif&ct=g";
  imageNotFound: string = "https://media4.giphy.com/media/Opm31LCucRc3qG0VqB/giphy.gif?cid=ecf05e473x9235eun3edvkv3kztkjx6ghgud9k2a6kj8lbuv&rid=giphy.gif&ct=g";
  constructor() { }
}
