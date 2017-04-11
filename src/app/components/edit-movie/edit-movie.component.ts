import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from  '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  id;
  title;
  stars;
  director;
  category;
  imdb;
  year;
  description;
  image;

  constructor(private fs: FirebaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.fs.getListingDetails(this.id).subscribe(listing => {
      this.title= listing.title;
      this.stars= listing.stars;
      this.director= listing.director;
      this.category= listing.category;
      this.imdb= listing.imdb;
      this.year= listing.year;
      this.description= listing.description;
    });
  }

  onEditSubmit() {
    console.log("HI");
    let listing = {
      title: this.title,
      stars: this.stars,
      director: this.director,
      category: this.category,
      imdb: this.imdb,
      year: this.year,
      description: this.description
    }
    this.fs.updateListing(this.id, listing);
    this.router.navigate(['/movies']);
  }

}
