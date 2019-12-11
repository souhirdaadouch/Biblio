import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  
  {
    path: "books",
    component: BooksComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "*",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
