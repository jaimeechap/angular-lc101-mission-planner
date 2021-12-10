import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  add(memberName: string, isFirst: boolean) {
    let crewArray = [];
    for (let i = 0; i < this.crew.length; i++) {
      crewArray.push(this.crew[i]["name"])
    }
    if (crewArray.includes(memberName)) {
      alert ("This name has already been used.")
    } else {
    this.crew.push({name: memberName, firstMission: isFirst});
    }
  };

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  memberBeingEdited: object = null;

  edit(member: object) {
    this.memberBeingEdited = member;
 }

 save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }
  constructor() { }

  ngOnInit() {
  }

}
