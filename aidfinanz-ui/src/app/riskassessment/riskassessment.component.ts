import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-riskassessment',
  templateUrl: './riskassessment.component.html',
  styleUrls: ['./riskassessment.component.scss']
})
export class RiskassessmentComponent implements OnInit {

  @Input() riskdata:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
  
  }
}
