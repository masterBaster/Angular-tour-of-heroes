import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
  bestHero: Hero = { 
      id: 11, 
      name: 'Mr. Nice', 
      belt: 'yellow', 
      expierience: 8, 
      special_abilites: 'RAPID CELL REGENERATION', 
      bad_character: true 
    }

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

  addTolocalStorage(): void {
    try {
      localStorage.setItem('messages', JSON.stringify(this.messages));
      let localMessages = JSON.parse(localStorage.getItem('messages'))
      console.log(localMessages);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  additemTolocalStorage(): void {
    try {
      let HeroObject_serialized = JSON.stringify(this.bestHero);
      localStorage.setItem('BestHero', HeroObject_serialized);
      console.log(HeroObject_serialized);

      let HeroObject_deserialized = JSON.parse(localStorage.getItem('BestHero'));
      console.log(HeroObject_deserialized);
    }
    catch(error) {
      console.error('Error saving to localStorage', error)
    }
  }


  constructor() { }
}
