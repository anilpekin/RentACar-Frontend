import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './components/carDetail/carDetail.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/car-image/car-image.component';


@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarComponent,
    CarImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
