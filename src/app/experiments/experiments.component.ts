import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string [] = [
    "Mars soil sample", "Plant growth in habitat", "Human bone density"
  ];

  add(newExperiments: string) {
    this.experiments.push(newExperiments);
    }
  
  remove(newExperiments: string) {
      let index = this.experiments.indexOf(newExperiments);
      this.experiments.splice(index, 1);
    }
  
    experimentsBeingEdited: string = null;
  
    edit(experiments: string) {
      this.experimentsBeingEdited = experiments;
   }
  
   save(experiments: string) {
    experiments['newExperiment'] = experiments;
    this.experimentsBeingEdited = null;
    }
  constructor() { }

  ngOnInit() {
  }

}
