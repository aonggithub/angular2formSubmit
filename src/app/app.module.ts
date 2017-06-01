import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { AddUser }  from './addUser/app.addUser';
import { ListUser }  from './listUser/listUser';
import { PageNotFoundComponent }  from './pageNotFound/pageNotFound';
import { RouterModule, Routes } from '@angular/router';
import { EmailValidatorDirective } from './shared/directives/email-format-validator.directive';

const appRoutes: Routes = [
  { path: 'add-user', component: AddUser },
  { path: 'list-user', component: ListUser },
  { path: '', component: AddUser },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AddUser,
    ListUser,
    PageNotFoundComponent,
    EmailValidatorDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
