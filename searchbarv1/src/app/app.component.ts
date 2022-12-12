import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchbarv1';
  search : any;

  constructor() {}

  ngOnInit(): void {
    this.search = document.getElementById('mysearch');
  }

  
  public openSearch() {
    document.getElementById('search')?.classList.toggle('active');
  }

  public clear() {
    this.search.value = '';
  }

}
