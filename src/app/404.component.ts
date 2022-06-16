import { Component } from '@angular/core'

@Component({
  template: `
  <div class='errorContainer'>
    <img class='errorImg' src="../assets/404-img.png" alt="Error page not found img">
    <h2 class="errorMessage">This page does not exist :(</h2>
  </div>
  `,
  styles: [`
    .errorContainer {
      padding-top: 15rem;
      height: 80vh;
      text-align: center;
    },
    .errorImg {
      width: 250px;
    },
    .errorMessage{
      font-size: 70px;
    }`]
})
export class Error404Component{
}
