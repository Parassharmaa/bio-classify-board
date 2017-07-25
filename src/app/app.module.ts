import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { BioCardComponent } from './components/bio-card/bio-card.component';
import { MaterialModule} from '@angular/material';
import { BioService } from './service/bio.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BioCardComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
  	BioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
