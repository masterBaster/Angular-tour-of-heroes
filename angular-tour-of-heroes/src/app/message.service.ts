import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  addTolocalStorage(): void {
    try {
      localStorage.setItem('messages', JSON.stringify(this.messages));
      let localMessages = JSON.parse(localStorage.getItem('messages'))
      console.log(localMessages);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }



  constructor() { }
}
