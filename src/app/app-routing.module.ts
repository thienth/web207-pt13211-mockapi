import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PublisherComponent} from './screens/publisher/publisher.component';
import {BookComponent} from './screens/book/book.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PublisherComponent
  },
  {
    path: 'books',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
