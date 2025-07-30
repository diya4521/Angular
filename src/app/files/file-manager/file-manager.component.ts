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
    ['jpg.svg', ' Biometric portrait '],
    ['pdf.svg', ' Contract #123 '],
    ['txt.svg', ' Crash logo'],
    ['doc.svg', ' DMCA notice #42'],
    ['xls.svg', ' Estimated budget'],
    ['pdf.svg', ' Invoices '],
    ['doc.svg', ' Personal projects '],
    ['doc.svg', ' Prices '],
    ['jpg.svg', ' Scanned image 20201012-1 '],
    ['jpg.svg', ' Scanned image 20201012-2 '],
    ['doc.svg', ' Shopping list '],
    ['xls.svg', ' Summer budget '],
    ['txt.svg', ' System logs '],
  ];

  openSidebar(item: string[]) {
    this.type = item[0];
    this.name = item[1];
  }

  @HostListener('window:scroll', [])
  onScroll() {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
