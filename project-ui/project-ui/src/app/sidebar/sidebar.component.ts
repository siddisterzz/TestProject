import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedClass = "templates"
  list=[
    {
      number:'1',
      name:'Request',
      icon:'fa-solid fa-house',
      link:'requests'
    },
    {
      number:'2',
      name:'Template',
      icon:'fa-solid fa-house',
      link:'templates'
    },
    {
      number:'3',
      name:'Dashboard',
      icon:'fa-solid fa-house',
      link:'statistics'
    }
  ]
  constructor(){}
  ngOnInit(): void {

  }
  onClassSelected(link:string){
    this.selectedClass=link
  }
}
