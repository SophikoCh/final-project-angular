import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photos.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos');
  }
  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    return this.http.get<Photo[]>(url);
  }
}

