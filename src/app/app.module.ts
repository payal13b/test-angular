import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { ProductComponent } from './product/product.component';
import { LinksComponent } from './links/links.component'
import { routing } from './links/links.routes';
//import { ImageComponent } from './image/image.component';
import { RedComponent } from './links/red.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    ProductComponent,
    LinksComponent,
    //ImageComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
