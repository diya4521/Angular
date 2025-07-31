import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../../com/header/header.component';
import { FolderCardComponent } from '../../com/folder-card/folder-card.component';
import { FileCardComponent } from '../../com/file-card/file-card.component';

@Component({
  selector: 'app-file-manager',
  imports: [HeaderComponent, FolderCardComponent, FileCardComponent],
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.css',
})
export class FileManagerComponent {
  showTopButton = true;
  name = '';
  type = '';

  FilesData = [
    ['jpg.svg', ' Biometric portrait', 'Images'],
    ['pdf.svg', ' Contract #123 ', 'Documents'],
    ['txt.svg', ' Crash logo', 'Documents'],
    ['doc.svg', ' DMCA notice #42', 'Documents'],
    ['xls.svg', ' Estimated budget', 'Documents'],
    ['pdf.svg', ' Invoices ', 'Documents'],
    ['doc.svg', ' Personal projects ', 'Documents'],
    ['doc.svg', ' Prices ', 'Documents'],
    ['jpg.svg', ' Scanned image 20201012-1 ', 'Images'],
    ['jpg.svg', ' Scanned image 20201012-2 ', 'Images'],
    ['doc.svg', ' Shopping list ', 'Documents'],
    ['xls.svg', ' Summer budget ', 'Documents'],
    ['txt.svg', ' System logs ', 'Documents'],
  ];

  CategoryData = [
    [
      'Images',
      'folder.svg',
      this.FilesData.filter((t) => t[2] == 'Images').length,
    ],
    [
      'Documents',
      'folder.svg',
      this.FilesData.filter((t) => t[2] == 'Documents').length,
    ],
  ];
  parseInt(value: string): number {
    return parseInt(value, 10);
  }
  openSidebar(item: string[]) {
    this.type = item[0];
    this.name = item[1];
  }

  @HostListener('window:scroll', [])
  onScroll() {}
}
