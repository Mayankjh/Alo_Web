import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = "/assets/undercon.html";
  }

}

