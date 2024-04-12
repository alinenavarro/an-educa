import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ToolbarModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ProtheusLibCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
