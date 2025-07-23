import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './com/header/header.component';
import { FileManagerComponent } from './files/file-manager/file-manager.component';
import { SideComponent } from './com/side/side.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'file', component: FileManagerComponent },
  { path: 'side', component: SideComponent },
];
