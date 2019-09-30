import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>*ngIf</h2>
    <h2 *ngIf="displayName; else nameElseBlock">
      Name is visible
    </h2>
    <ng-template #nameElseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>

    <!-- alternate syntax -->
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Name is visible</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Name is hidden</h2>    
    </ng-template>

    <h2>*ngSwitch</h2>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <h2>*ngFor</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>index</th>
          <th>First</th>
          <th>Last</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let color of colors; index as i; first as f; last as l; let o = odd; 
        let e = even" [ngClass] = "{odd: o, even: e}">
          <td>{{i}}</td>
          <td>{{f}}</td>
          <td>{{l}}</td>
          <td>{{color}}</td>
        </tr>
      </tbody>
    </table>

    <h2>*ngFor</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let p of person; let o = odd; let e = even" 
        [ngClass] = "{oddStyle: o, evenStyle: e}">
          <td>{{p.id}}</td>
          <td>{{p.name.toUpperCase()}}</td>
          <td>{{p.age}}</td>
          <td appAge>{{p.gender}}</td>
          <td *ngIf="p.age < 40; else elseBlock">Jr.Employee</td>
            <ng-template #elseBlock>
                Sr.Employee
            </ng-template>
        </tr>
      </tbody>
    </table>

  <div [ngClass]="'red size'">
    Red text with size 20
  </div>

  <h3>Custom directive to log input data in console</h3>
  <input type = "text" appLog/>
  <h1 appHighlight>Hello World</h1>
  `,
  styles: [`
    .evenStyle {background-color: grey;}
    .oddStyle {background-color: lightblue;}
    .red {color: red;}
    .size {font-size: 20px;}
  `]
})
export class TestComponent implements OnInit {

  public displayName = false;
  public color = "red";
  public colors = ["red","blue","green","yellow"]
  public person = [
    {
      "id": "1", "name": "sam", "age": 30, "gender": "M"
    },
    {
      "id": "2", "name": "mary", "age": 40, "gender": "F"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
