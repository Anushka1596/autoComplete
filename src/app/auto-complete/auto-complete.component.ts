import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  numbers = ['One', 'Two' , 'Three' , 'Four' , 'Five'];
  any_char_list : any;
  first_charList :any;
  aChar='';
  fChar='';
  ashow=false;
  fshow=false;
  constructor() { }

  ngOnInit() {
    this.any_char_list = this.numbers;
    this.first_charList = this.numbers;
  }
  matchAnyCharater(text){
    if(text && text.length){
      this.any_char_list =[];
     this.any_char_list = this.numbers.filter(option => option.toLowerCase().includes(text.toLowerCase()));

    }else{
      this.any_char_list = this.numbers
    }

  }

  matchFirstCharater(text){
  if(text && text.length){
      this.first_charList = [];
      this.first_charList = this.numbers.filter(option => option.toLowerCase().indexOf(text.toLowerCase()) === 0);
      }else{
        this.first_charList = this.numbers
      }
    }
    setItem(f,item){
      if(f == 'fChar'){
        this.fChar= item;
        this.first_charList = [];
      }else{
        this.aChar= item;
        this.any_char_list = [];
      }
    }

}