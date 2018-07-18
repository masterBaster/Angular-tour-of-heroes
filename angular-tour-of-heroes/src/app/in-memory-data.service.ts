import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb(){
    const heroes = [
      { id: 11, name: 'Mr. Nice', belt: 'yellow', expierience: 8, special_abilites: 'RAPID CELL REGENERATION', bad_character: true },
      { id: 12, name: 'Narco', belt: 'blue', expierience: 6, special_abilites: 'EMPATHIC MIMICRY', bad_character: true },
      { id: 13, name: 'Bombasto', belt: 'green', expierience: 7, special_abilites: 'HEALING', bad_character: true  },
      { id: 14, name: 'Celeritas', belt: 'purple', expierience: 9, special_abilites: 'PRECOGNITION', bad_character: false },
      { id: 15, name: 'Magneta', belt: 'orange', expierience: 4, special_abilites: 'PHASING', bad_character: true },
      { id: 16, name: 'RubberMan', belt: 'red', expierience: 6, special_abilites: 'SHAPE SHIFTING', bad_character: true },
      { id: 17, name: 'Dynama', belt: 'black', expierience: 8, special_abilites: 'FLIGHT', bad_character: false },
      { id: 18, name: 'Dr IQ', belt: 'green', expierience: 10, special_abilites: 'TELEPATHY', bad_character: true },
      { id: 19, name: 'Magma', belt: 'yellow', expierience: 5, special_abilites: 'SPACE-TIME MANIPULATION', bad_character: true },
      { id: 20, name: 'Tornado', belt: 'red', expierience: 7, special_abilites: 'SUPER STRENGTH', bad_character: false }
    ];
    return (heroes);
  }
}
