import { Component } from '@angular/core';

@Component({
  selector: 'abc-root', // --> in html <abc-root></abc-root>
  //selector: '[abc-root]', --> in html <div abc-root></div>
  //selector: '.abc-root', // --> in html <div class="abc-root"></div>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 /*styles: [`
  h3 {
    color: blue;
  }
 `]
 */
})
export class AppComponent {
  title = 'my-app';
  jis: string='';
  showSecret = false;
  log: Date [] = [];
  onToggle(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1 );
    this.log.push(new Date () );
  }
}
