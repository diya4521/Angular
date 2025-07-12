import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-card',
  imports: [],
  templateUrl: './file-card.component.html',
  styleUrl: './file-card.component.css',
})
export class FileCardComponent {
  @Input() name!: string;
  @Input() type!: string;
}
