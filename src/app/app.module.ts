import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './routes';

import { AppComponent } from './app.component';
import { TestDirective } from './common/directives/test.directive';
import { TestPipe } from './common/pipes/test.pipe';
import { TestComponent } from './components/test/test.component';
import { ApiService } from './common/services/api.service';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    TestPipe,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
