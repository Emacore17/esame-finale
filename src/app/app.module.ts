import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {
  LucideAngularModule,
  CloudSun,
  Sunrise,
  Sunset,
  ChevronLeftSquare,
  ChevronRightSquare,
  Thermometer,
} from 'lucide-angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MeteoDataComponent } from './pages/meteo-data/meteo-data.component';
import { SkeletonTableComponent } from './components/skeleton-table/skeleton-table.component';
import { SkeletonSundataComponent } from './components/skeleton-sundata/skeleton-sundata.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MeteoDataComponent, SkeletonTableComponent, SkeletonSundataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({
      CloudSun,
      Sunrise,
      Sunset,
      ChevronLeftSquare,
      ChevronRightSquare,
      Thermometer,
    }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
