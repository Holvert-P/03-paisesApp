import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';
import { AppRoutingModule } from './app-routing.module';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [AppComponent, InputSearchComponent],
  imports: [AppRoutingModule, BrowserModule, SharedModule, PaisModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
