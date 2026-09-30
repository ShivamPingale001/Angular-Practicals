import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  userId: string | null = null;

  constructor(private route: ActivatedRoute) {

    this.userId = this.route.snapshot.paramMap.get('id');

  }
}