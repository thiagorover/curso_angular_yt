import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Rover';
  age: number = 25;
  job = 'Programador'
  hobbies = ['Futebol', 'Academia', 'Estudar'];
  car = {
    name: 'Renault',
    year: 2014
  }

  constructor(){}

  ngOnInit(): void{}

}
