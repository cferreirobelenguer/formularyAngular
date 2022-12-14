import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { formularyModule } from './formulary/formulary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    formularyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
