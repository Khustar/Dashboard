import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hideMe1 : boolean = false
  hideMe2 : boolean = false
  hideMe3 : boolean = false
  hideMe4 : boolean = false

  hideMe5 : boolean = false
  hideMe6 : boolean = false
  hideMe7 : boolean = false
  hideMe8 : boolean = false

  loans  : boolean = false
  account : boolean = false

  constructor() { }

  ngOnInit() {
  }

  hide_1(){
    if(this.hideMe1 == true){
      this.hideMe1 = false
    }
    else{
      this.hideMe1 = true
    }
    
  }

  hide_2(){
    if(this.hideMe2 == true){
      this.hideMe2 = false
    }
    else{
      this.hideMe2 = true
    }
  }

  hide_3(){
    if(this.hideMe3 == true){
      this.hideMe3 = false
    }
    else{
      this.hideMe3 = true
    }
  }

  hide_4(){
    if(this.hideMe4 == true){
      this.hideMe4 = false
    }
    else{
      this.hideMe4 = true
    }
  }

    hide_5(){
      if(this.hideMe5 == true){
        this.hideMe5 = false
      }
      else{
        this.hideMe5 = true
      }
      
    }
  
    hide_6(){
      if(this.hideMe6 == true){
        this.hideMe6 = false
      }
      else{
        this.hideMe6 = true
      }
    }
  
    hide_7(){
      if(this.hideMe7 == true){
        this.hideMe7 = false
      }
      else{
        this.hideMe7 = true
      }
    }
  
    hide_8(){
      if(this.hideMe8 == true){
        this.hideMe8 = false
      }
      else{
        this.hideMe8 = true
      }
  }

  open_loan(){
    if(this.loans == true){
      this.loans = false
    }
    else{
      this.loans = true
    }
  }

  open_account(){
    if(this.account == true){
      this.account = false
    }
    else{
      this.account = true
    }
  }

}
