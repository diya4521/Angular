import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './com/header/header.component';
import { FileManagerComponent } from './files/file-manager/file-manager.component';

export const routes: Routes = [
  { path: 'file', component: FileManagerComponent },
  { path: '', component: LoginComponent },
];
