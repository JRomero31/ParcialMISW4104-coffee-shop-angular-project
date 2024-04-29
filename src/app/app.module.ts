import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CafeModule} from './cafe/cafe.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CafeListComponent} from './cafe/cafe-list-components/cafe-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CafeService} from './cafe/service/cafe.service';

@NgModule({
  declarations: [
    AppComponent,
    CafeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafeModule,
    HttpClientModule
  ],
  providers: [CafeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
