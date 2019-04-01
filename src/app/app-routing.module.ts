import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PublisherComponent} from './screens/publisher/publisher.component';
import {BookComponent} from './screens/book/book.component';
import {PublisherAddFormComponent} from './screens/publisher-add-form/publisher-add-form.component'
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PublisherComponent
  },
  {
    path: 'publishers/:pId/books',
    component: BookComponent
  },
  {
    path: 'publisher-add',
    component: PublisherAddFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
