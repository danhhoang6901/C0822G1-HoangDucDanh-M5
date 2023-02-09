import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Dictionary} from "../../model/dictionary";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionary: Dictionary[] = [];
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.dictionary = this.dictionaryService.getAll();
  }

}
