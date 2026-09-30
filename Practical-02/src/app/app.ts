import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html'
})
export class App {
  studentNames: string[] = [
    'Rahul',
    'Priya',
    'Amit',
    'Sneha',
    'Shivam'
  ];
}