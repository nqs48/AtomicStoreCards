import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  colorText: string = '#adb5bd';

  constructor() { }


  mappingData(message: string, imageUrl: string): Promise<SweetAlertResult<any>>{
    let timerInterval: string | number | NodeJS.Timer | undefined;
    return Swal.fire({
      title: message,
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      background: "rgba(0, 8, 20, 0.8)",
      html: 'I will close in <b class="view"></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer()?.querySelector('b')
        timerInterval = setInterval(() => {
          if(b != undefined){
            b.textContent = Swal.getTimerLeft()?.toString() || ''
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      },
      customClass:{
        popup:"card-custom"
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown',

      },
      backdrop: `
    rgba(51, 56, 86, 0.5)
  `,
    })
  }

  successMessage(message = 'The operation was carried out successfully', imageUrl: string) {
    return Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      background: "rgba(0, 8, 20, 0.8)",
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      color: this.colorText,
      timer: 1500,
      customClass:{
        popup:"card-custom"
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown',

      },
      backdrop: `
    rgba(51, 56, 86, 0.5)
  `,
    });
  }

  errorMessage(
    message = 'Something went wrong!',
    imageUrl: string,
    footer: string = 'Check the information entered'
  ) {
    return Swal.fire({
      title: 'Oops...',
      text: message,
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      background: "rgba(0, 8, 20, 0.8)",
      color: this.colorText,
      footer: footer,
      cancelButtonColor: '#fa3007',
      confirmButtonColor: '#673ab7',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown',

      },
      backdrop: `
    rgba(51, 56, 86, 0.5)
  `,
    });
  }

  confirmationPopup(title: string, text: string, messageButton: string, imageUrl: string) {
    return Swal.fire({
      title: title,
      text: text,
      background: "rgba(0, 8, 20, 0.8)",
      color: this.colorText,
      icon: 'warning',
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      showCancelButton: true,
      cancelButtonColor: '#fa3007',
      confirmButtonColor: '#673ab7',
      confirmButtonText: messageButton,
      cancelButtonText:'Cancelar',
      customClass:{
        popup:"card-custom"
      },
      backdrop: `
    rgba(51, 56, 86, 0.5)
  `,
    });
  }

  confirmationAnimated(title: string, imageUrl: string){
    return Swal.fire({
      title: title,
      background: "rgba(0, 8, 20, 0.8)",
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      color: this.colorText,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown',

      },
      backdrop: `
    rgba(51, 56, 86, 0.5)
  `,

    });
  }

  confirmationRecharge(imageUrl: string){
    return Swal.fire({
      title: 'How much are you going to recharge?',
      input: 'range',
      text: 'American Dollars (USD)',
      background: "rgba(0, 8, 20, 0.8)",
      color: this.colorText,
      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      backdrop: `
    rgba(51, 56, 86, 0.5)
  `,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown',

      },
      inputAttributes: {
        min: '1',
        max: '200',
        step: '1',
      },
      inputValue: 5
    }
    );
  }


}
