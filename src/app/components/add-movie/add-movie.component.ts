import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  title: any;
  stars: any;
  director: any;
  category: any;
  imdb: any;
  year: any;
  description: any;
  image:any;

  constructor(
    private fs: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    let listing = {
      title: this.title,
      stars: this.stars,
      director: this.director,
      category: this.category,
      imdb: this.imdb,
      year: this.year,
      image: this.image,
      description: this.description
    }
    this.fs.addListing(listing);
    this.router.navigate(['/movies']);
  }
}
