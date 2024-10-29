import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Make sure to import RouterModule
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { LoginComponent } from './components/login/login.component'; // Import your LoginComponent

@NgModule({
  declarations: [
    
  ],
  imports: [
    LoginComponent,
    AppComponent,
    BrowserModule,
    RouterModule, 
    FormsModule,
  ],
  providers: []
})
export class AppModule { }
