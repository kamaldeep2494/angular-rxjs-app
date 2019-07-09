import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Memoize } from 'lodash-decorators';
import { JokeService, Joke } from 'src/app/joke.service';

//import { JokeService, Joke } from '../joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes$: Observable<Array<Joke>>;
  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.jokes$ = this.jokeService.jokes;
    console.log(this.jokes$);
  }
  @Memoize()
  getVotes(id: number) {
    return Math.floor(10 + Math.random() * (100 - 10));
  }
}
