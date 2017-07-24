import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  home = true;
  imagehome = true;

  hideImage() {
    this.imagehome = false;
  }
  showImage() {
    if (this.imagehome === false) {
      this.imagehome = true;
    }

  }
}
