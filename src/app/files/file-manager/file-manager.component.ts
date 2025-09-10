import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../com/header/header.component';
import { FolderCardComponent } from '../../com/folder-card/folder-card.component';
import { FileCardComponent } from '../../com/file-card/file-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-manager',
  imports: [
    HeaderComponent,
    FolderCardComponent,
    FileCardComponent,
    FormsModule,
  ],
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.css',
})
export class FileManagerComponent implements OnInit {
  ngOnInit(): void {
    this.updateCategoryData();
  }

  showTopButton = true;
  name = '';
  type = '';
  findex = -1;
  CategoryData: any = [];

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

  AllFilesData = [
    ['jpg.svg', ' Biometric portrait', 'Images', 'All'],
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

  filterData(name: any) {
    if (name == 'All') {
      this.FilesData = this.AllFilesData;
    } else {
      var Data = this.AllFilesData.filter((t) => t[2] == name);
      this.FilesData = Data;
    }
  }

  // CategoryData = [
  //   [
  //     'Images',
  //     'folder.svg',
  //     this.FilesData.filter((t) => t[2] == 'Images').length,
  //   ],
  //   [
  //     'Documents',
  //     'folder.svg',
  //     this.FilesData.filter((t) => t[2] == 'Documents').length,
  //   ],
  // ];

  updateCategoryData() {
    this.CategoryData = [
      [
        'Images',
        'folder.svg',
        this.AllFilesData.filter((t) => t[2] == 'Images').length,
      ],
      [
        'Documents',
        'folder.svg',
        this.AllFilesData.filter((t) => t[2] == 'Documents').length,
      ],
    ];
  }

  parseInt(value: string): number {
    return parseInt(value, 10);
  }
  openSidebar(item: string[], index: any) {
    this.findex = index;
    this.type = item[0];
    this.name = item[1];
  }

  addFile(form: any) {
    var fle: string = form.value.file;
    var title = form.value.title;
    var ext = fle.split('.')[1];
    // alert(ext);
    var data = [];
    if (ext == 'jpg') {
      data = ['jpg.svg', title, 'Images'];
    } else if (ext == 'pdf') {
      data = ['pdf.svg', title, 'Documents'];
    } else if (ext == 'txt') {
      data = ['txt.svg', title, 'Documents'];
    } else if (ext == 'doc') {
      data = ['doc.svg', title, 'Documents'];
    } else if (ext == 'docx') {
      data = ['doc.svg', title, 'Documents'];
    } else if (ext == 'xls') {
      data = ['xls.svg', title, 'Documents'];
    } else {
      data = ['default.svg', title, ''];
    }

    // var data = ['jpg.svg', title, 'Images'];
    this.AllFilesData.push(data);
    this.FilesData = this.AllFilesData;
    //png

    this.updateCategoryData();
  }

  deleteData() {
    // alert(this.findex);
    this.AllFilesData.splice(this.findex, 1);
    this.FilesData = this.AllFilesData;
    console.log(this.AllFilesData);

    this.updateCategoryData();
  }

  @HostListener('window:scroll', [])
  onScroll() {}
}
