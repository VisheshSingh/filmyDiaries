import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) { }

  getMovies(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Movie[]>
    return this.listings;
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
