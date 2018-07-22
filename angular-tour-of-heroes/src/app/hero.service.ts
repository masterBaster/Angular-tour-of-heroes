import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroesUrl = 'api/heroes'; 
  
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error); 
   
      this.log(`${operation} failed: ${error.message}`);
   
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroServie: fetched heroes')
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', [])))
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
