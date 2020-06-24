import { Injectable } from '@angular/core';
import { WikiSearchResult } from './WikiSearchTemplate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WikiResultsService {
  constructor(private readonly http: HttpClient) {}
  private static readonly URL_BEGINNING = 'https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=';
  private static readonly URL_END = '&format=json';
  
  search(query: string): Observable<WikiSearchResult> {
    const url = this.urlBeginning + query + this.urlEnd;
    return this.http.get<WikiSearchResult>(this.url);
  }
}
