import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmisionUvWebListComponent } from './components/admision-uv-web-list/admision-uv-web-list.component';
import { AddAdmisionUvWebComponent } from './components/add-admision-test-uv-web/add-admision-uv-web.component';

const routes: Routes = [
//  { path: '', redirectTo: 'add', pathMatch: 'full' },
//  { path: 'tests', component: TestsUvWebListComponent },
//  { path: 'add', component: AddTestUvWebComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
