import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) { }

  getMovies(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Movie[]>
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Movie>
    return this.listing;
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
