import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IWeatherData } from 'src/app/types/weatherdata.type';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private apiUrl = 'https://www.7timer.info/bin/civil.php';

  constructor(private http: HttpClient) {}

  getWeatherData(lat: number, lng: number): Observable<IWeatherData> {
    const url = `${this.apiUrl}?lat=${lat}&lng=${lng}&ac=0&unit=metric&output=json&tzshift=0`;
    return this.http.get<IWeatherData>(url).pipe(catchError(this.handleError));
  }

  // TODO: Gestione degli errori
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error has occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // Log or display error
    console.error(errorMessage);
    return throwError(() => new Error('Qualcosa è andato storto.'));
  }
}
