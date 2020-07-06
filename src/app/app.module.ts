import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login/login.component';
import { NotesComponent } from './component/notes/notes/notes.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorshandlerService } from '../app/shared/service/errorshandler.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: ErrorshandlerService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
