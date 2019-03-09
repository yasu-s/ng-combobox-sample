import { Component } from '@angular/core';

interface TestData {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  template: `
    <div>
      <select [(ngModel)]="value" (change)="log()">
        <option [ngValue]="null">Not Selected</option>
        <ng-container *ngFor="let item of items">
          <option [ngValue]="item.id">{{item.name}}</option>
        </ng-container>
      </select>
      <button (click)="init()">Init</button>
      <button (click)="clear()">Clear</button>
    </div>
  `
})
export class AppComponent {

  items: TestData[] = [
    { id: 1, name: 'hige' },
    { id: 2, name: 'hoge' },
    { id: 3, name: 'hage' }
  ]

  value: number | null = 2;

  clear(): void {
    this.value = null;
    this.log();
  }

  init(): void {
    this.value = 2;
    this.log();
  }

  log(): void {
    console.log('value:', this.value);
  }
}
