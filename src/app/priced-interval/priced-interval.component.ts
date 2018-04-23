import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResaService, PricedInterval } from '../resa.service';

@Component({
  selector: 'app-priced-interval',
  templateUrl: './priced-interval.component.html',
  styleUrls: ['./priced-interval.component.css']
})
export class PricedIntervalComponent implements OnInit {

  public curr: PricedInterval;
  public error = "";

  @Output() public created = new EventEmitter<PricedInterval>();

  constructor(private resaService: ResaService) {
    this.curr = this.resaService.createPricedInterval();
  }

  ngOnInit() {
  }

  create() {
    this.error = "";
    const ret = this.curr;
    if (ret.when.from.getTime() >= ret.when.to.getTime()) {
      this.error = "La date de début doit être avant à la date de fin";
      return;
    }

    this.created.emit({...ret});
    this.curr = this.resaService.createPricedInterval();
  }

}
