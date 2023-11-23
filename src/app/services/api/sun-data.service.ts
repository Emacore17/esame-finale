import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISunData } from 'src/app/types/sundata.type';

@Injectable({
  providedIn: 'root',
})
export class SunDataService {
  private apiUrl = 'https://api.sunrisesunset.io/json';

  constructor(private http: HttpClient) {}

  getSunData(lat: number, lng: number): Observable<ISunData> {
    const url = `${this.apiUrl}?lat=${lat}&lng=${lng}`;
    return this.http.get<ISunData>(url).pipe(catchError(this.handleError));
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
    console.error(errorMessage);
    return throwError(() => new Error('Qualcosa è andato storto'));
  }
}
