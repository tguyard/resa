import { Component, OnInit } from '@angular/core';
import { Structure, PricedInterval } from '../resa.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  public curr: Structure = {
    description: "",
    id: "",
    name: "",
    opened: [],
  };

  constructor() { }

  ngOnInit() {
  }

  onCreated(data: PricedInterval) {
    console.log("HERE !", data);
    this.curr.opened.push(data);
  }

}
