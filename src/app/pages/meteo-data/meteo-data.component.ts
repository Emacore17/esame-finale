import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SunDataService } from 'src/app/services/api/sun-data.service';
import { WeatherDataService } from 'src/app/services/api/weather-data.service';
import { combineLatest, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISunData } from 'src/app/types/sundata.type';
import { IWeatherData } from 'src/app/types/weatherdata.type';

@Component({
  selector: 'app-meteo-data',
  templateUrl: './meteo-data.component.html',
})
export class MeteoDataComponent implements OnInit {
  sunData: ISunData | null = null;
  weatherData: IWeatherData | null = null;
  currentPage = 0;
  itemsPerPage = 8;

  constructor(
    private route: ActivatedRoute,
    private sunDataService: SunDataService,
    private weatherDataService: WeatherDataService
  ) {}

  ngOnInit() {
    const lat = +this.route.snapshot.paramMap.get('lat')!;
    const lon = +this.route.snapshot.paramMap.get('lon')!;

    const sunData$ = this.sunDataService.getSunData(lat, lon).pipe(
      catchError((error) => {
        // TODO: Mostrare errore per miglior UX
        console.error('Error fetching sun data', error);
        return of(null); // or return of([]);
      })
    );

    const weatherData$ = this.weatherDataService.getWeatherData(lat, lon).pipe(
      catchError((error) => {
        // TODO: Mostrare errore per miglior UX
        console.error('Error fetching weather data', error);
        return of(null); // or return of([]);
      })
    );

    combineLatest([sunData$, weatherData$]).subscribe(
      ([sunData, weatherData]) => {
        if (sunData) {
          this.sunData = sunData;
          console.log('Sun Data:', sunData);
        }
        if (weatherData) {
          this.weatherData = weatherData;
          console.log('Weather Data:', weatherData);
        }
      }
    );
  }

  get paginatedItems() {
    if (this.weatherData) {
      const startIndex = this.currentPage * this.itemsPerPage;
      return this.weatherData.dataseries.slice(
        startIndex,
        startIndex + this.itemsPerPage
      );
    }
    return;
  }

  nextPage() {
    if (this.weatherData) {
      if (
        this.currentPage <
        this.weatherData.dataseries.length / this.itemsPerPage - 1
      ) {
        this.currentPage++;
      }
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  get latitudine() {
    return this.route.snapshot.paramMap.get('lat');
  }

  get longitudine() {
    return this.route.snapshot.paramMap.get('lon');
  }
}
