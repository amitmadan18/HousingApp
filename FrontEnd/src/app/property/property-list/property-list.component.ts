import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [{
    "Id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price":  12000
  },{
    "Id": 2,
    "Name": "Amit House",
    "Type": "House",
    "Price":  10000
  },{
    "Id": 3,
    "Name": "Sumit House",
    "Type": "House",
    "Price":  11000
  },{
    "Id": 4,
    "Name": "Prateek House",
    "Type": "House",
    "Price":  13000
  },{
    "Id": 5,
    "Name": "Vivek House",
    "Type": "House",
    "Price":  14000
  },{
    "Id": 6,
    "Name": "Rahul House",
    "Type": "House",
    "Price":  15000
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
