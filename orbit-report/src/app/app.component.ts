import { Component } from '@angular/core';
import { Satellite } from './satellite';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {

        let fetchedSatellites = data.satellites;
        let i=0;
        while(i<fetchedSatellites.length){
          this.sourceList.push(new Satellite(
            fetchedSatellites[i].name,
            fetchedSatellites[i].type, 
            fetchedSatellites[i].launchDate, 
            fetchedSatellites[i].orbitType, 
            fetchedSatellites[i].operational
          ));
          i+=1
        }
  
       }.bind(this));
    }.bind(this));
 
 }
}
