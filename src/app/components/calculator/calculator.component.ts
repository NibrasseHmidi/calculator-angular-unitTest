import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

screen="";
a: any;
b:any;
c:any;
d="";




  ngOnInit(): void {
  }

entervalue(value:any){
  if((this.b=="+")||(this.b=="-")||(this.b=="÷")||(this.b=="×")){

this.d=this.d+value;
this.screen=this.screen+value
this.c=this.d

  }
  else{
    this.screen=this.screen+value;
    this.a=this.screen
  }
}
condition(value: any){
  this.screen=this.screen+value;
  this.b=value
}
clear(){
  this.screen=" "
  this.a=" "
  this.b=" "
  this.c=" "
  this.d=" "
}


objectArray=[] as any;
result(){

  if(this.b=="+"){

    this.screen=(parseInt(this.screen)+parseInt(this.c)).toString()

  }
  if(this.b=="-"){

    this.screen=(parseInt(this.screen)-parseInt(this.c)).toString()

  }
  if(this.b=="×"){

    this.screen=(parseInt(this.screen)*parseInt(this.c)).toString()
    // this.objectArray.push(parseInt(this.screen)*parseInt(this.c))
  }
  if(this.b=="÷"){

    this.screen=(parseInt(this.screen)/parseInt(this.c)).toString()

  }
}


}
