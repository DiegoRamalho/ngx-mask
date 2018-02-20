import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { Ng4MaskModule } from './ng4-mask/ng4-mask.module';

@NgModule({
            declarations: [
              AppComponent
            ],
            imports: [
              BrowserModule,
              BrowserAnimationsModule,
              ReactiveFormsModule,
              MatGridListModule,
              MatSidenavModule,
              MatToolbarModule,
              MatSelectModule,
              MatButtonModule,
              MatInputModule,
              Ng4MaskModule.forRoot(),
              MatIconModule,
              MatListModule,
              MatCardModule,
              FormsModule,
              HttpModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
