import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormularyComponent } from './formulary.component';
import { TextoPoliticaComponent } from '../texto-politica/texto-politica.component';

@NgModule({
  declarations: [
    FormularyComponent,
    TextoPoliticaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormularyComponent,
    TextoPoliticaComponent
  ],
  providers: [],
  
})
export class formularyModule { }