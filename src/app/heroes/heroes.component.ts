import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { heroList } from '../hero-list'

@Component({
  selector: 'app-heroes',
  //template: ' {{test}} ',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroList = heroList;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}

/*
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
*/