import { Component, OnInit } from '@angular/core';
import {FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;
  constructor(private FB: FirebaseService) { }

  ngOnInit() {
    this.FB.getMovies().subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    })
  }

}
