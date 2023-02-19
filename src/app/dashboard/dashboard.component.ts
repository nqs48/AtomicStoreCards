import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  sum(num1: number, num2: number ): number{
    return num1 + num2;
  }

  validateSum(num1:number, num2: number){
    let sum=this.sum(num1, num2)
    return sum > 10;
  }


  addItem(num1:number, num2: number): string[] {
    let sum = this.validateSum(num1, num2);
    return sum? ['sofka']: [''];
   }

}
