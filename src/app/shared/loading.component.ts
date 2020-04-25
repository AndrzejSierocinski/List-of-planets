import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loading',
  template: '<div style="margin-top: 13px"><p>{{message}}</p></div>'
})
export class LoadingComponent {
  @Input() message: string;
}
