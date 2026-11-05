
import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedService {

  private readonly savedIds = signal<number[]>([]);

  readonly savedCount = computed(() => this.savedIds().length);

  isSaved(id: number): boolean {
    return this.savedIds().includes(id);
  }

  toggle(id: number): void {
    this.savedIds.update(ids =>
      ids.includes(id)
        ? ids.filter(savedId => savedId !== id)
        : [...ids, id]
    );
  }
}
