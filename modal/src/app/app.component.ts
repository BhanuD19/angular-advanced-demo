import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginActive = true;

  setLoginActive(loginActive: boolean) {
    this.loginActive = loginActive;

  }
}
