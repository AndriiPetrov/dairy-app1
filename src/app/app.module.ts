import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryItemsComponent } from './diary-items/diary-items.component';
import { DairyNotesComponent } from './dairy-notes/dairy-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryItemsComponent,
    DairyNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
