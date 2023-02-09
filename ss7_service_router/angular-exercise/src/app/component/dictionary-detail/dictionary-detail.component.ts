import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Dictionary} from "../../model/dictionary";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;
  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get("id");
      this.dictionary = this.dictionaryService.findById(parseInt(id));
    })
  }

  ngOnInit(): void {
  }

}
