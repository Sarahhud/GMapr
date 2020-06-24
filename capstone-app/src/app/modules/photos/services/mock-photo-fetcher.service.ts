import MockPhotos from 'src/app/modules/photos/assets/mock-images-one.json';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockPhotoFetcher {

  getPhotos(): Observable<any> {
    return of(MockPhotos);
  }
}
