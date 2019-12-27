import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de calculadora';
  operandoA:number=0;
  operandoB:number=0;
  resultadoSuma:number=0;
 

  onSumarNumeros():void{
  this.resultadoSuma=this.operandoA+this.operandoB;
  }

}
