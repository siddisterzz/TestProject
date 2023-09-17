import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedClass = 1
  onSelectedClass(n:number){
    this.selectedClass = n
  }
}
