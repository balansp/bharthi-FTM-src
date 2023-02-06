import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
       &copy; 2023
    </span>
    <div class="created-by">
     <span class="created-by">
      All Rights reserved.
      </span>
    </div>
  `,
})
export class FooterComponent {
}
