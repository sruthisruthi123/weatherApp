import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserAuthServiceService } from 'src/app/user/auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './toolbar.component.html',
  styleUrls:['./toolbar.component.css']
})
export class ToolbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public userAuth :UserAuthServiceService) {
      console.log(userAuth.user)
    }

}
