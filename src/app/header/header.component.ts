import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public url: string;
  constructor(router: Router ) {
    this.url = router.url
  }

  ngOnInit() {
  }

}
