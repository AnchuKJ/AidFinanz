import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loanreg',
  templateUrl: './loanreg.component.html',
  styleUrls: ['./loanreg.component.scss']  
})
export class LoanregComponent implements OnInit {

  subtitle:string;

  constructor(private _formBuilder: FormBuilder) {     
    this.subtitle = "Please fill the form below to perform Risk Assessment";    
  }

  ngOnInit() {
  
  }

}
