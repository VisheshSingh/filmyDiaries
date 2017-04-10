import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  movies: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) { }

  getMovies(){
    this.movies = this.af.database.list('/movies') as FirebaseListObservable<Movie[]>
    return this.movies;
  }
}

interface Movie{
  $key?: string;
  title?: string;
  category?: string;
  image?: string;
  description?: string;
  director?: string;
  stars?: string;
  imdb?: number;
  year?: number;

}
