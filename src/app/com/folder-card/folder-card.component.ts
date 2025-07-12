import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-folder-card',
  imports: [],
  templateUrl: './folder-card.component.html',
  styleUrl: './folder-card.component.css',
})
export class FolderCardComponent {
  @Input() name!: string;
  @Input() fileCount!: number;
}
