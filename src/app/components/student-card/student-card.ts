
/*
FILE: student-card.ts
WHAT: Defines the reusable Student Card component.
WHY: Receives student data and handles missing images.
*/

import { inject } from '@angular/core';
import { SavedService } from '../../services/saved.service';

import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {

  // Receive one student from the parent.
  readonly student = input.required<Student>();

  // Track whether the image failed to load.
  private readonly imageFailed = signal(false);

  // Determine which image should be displayed.
  protected readonly photoSrc = computed(() =>
    this.imageFailed()
      ? 'images/placeholder-portrait.svg'
      : this.student().photo
  );

  // Called when an image fails to load.
  protected onImageError(): void {
    this.imageFailed.set(true);
  }
  
readonly savedService = inject(SavedService);

toggleSaved(event: MouseEvent): void {
  event.preventDefault();
  event.stopPropagation();

  this.savedService.toggle(this.student().id);
}

}
