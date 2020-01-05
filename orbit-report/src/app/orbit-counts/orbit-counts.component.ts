import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  sumTableColumn() {
    let columnSum =  []
    
  }

}
