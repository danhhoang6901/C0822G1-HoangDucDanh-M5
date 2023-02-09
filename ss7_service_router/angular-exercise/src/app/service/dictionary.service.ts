import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [{
    id: 1,
    vietnamese: "Táo",
    english: "Apple",
    description: "Một loại trái cây"
  }]

  constructor() {
  }

  getAll() {
    return this.dictionary;
  }

  findById(number: number) {
    let result = this.dictionary.filter(element => element.id === number);
    return result[0];
  }
}
