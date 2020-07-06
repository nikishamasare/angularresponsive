import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorshandlerService implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      const message = (error.error instanceof ErrorEvent) ?
        error.error.message : `server returned code ${error.status} with body "${error.error}"`;
      console.log('error msg >>', error.error.message, message);
      if (!navigator.onLine) {
        // No Internet connection
      }
    }
  }
}
