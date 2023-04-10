import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-deed',
  templateUrl: './deed.component.html',
  styleUrls: ['./deed.component.scss']
})
export class DeedComponent {
  @HostBinding('class.app-deed') app_deed: boolean = true;
}
