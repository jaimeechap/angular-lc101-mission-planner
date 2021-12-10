import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string [] = [
    "habitat dome", "drones", "Food Containers", "Oxygen tanks"
  ];

  add(newTool: string) {
    this.equipment.push(newTool);
    }
  
  remove(newTool: string) {
      let index = this.equipment.indexOf(newTool);
      this.equipment.splice(index, 1);
    }
  
    equipmentBeingEdited: string = null;
  
    edit(equipment: string) {
      this.equipmentBeingEdited = equipment;
   }
  
   save(equipment: string) {
    equipment['newTool'] = equipment;
    this.equipmentBeingEdited = null;
    }
  constructor() { }

  ngOnInit() {
  }

};
