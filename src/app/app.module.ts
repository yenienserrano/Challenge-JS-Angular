import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OperacionComponent } from './pages/operacion/operacion.component';
import { HeaderComponent } from './shared/header/header.component';
import { OperationService } from './service/operation.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperacionComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    OperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
