import { Component } from '@angular/core';
import { AuthenticationService } from '../../../Services/authentication.service';
import { SectionService } from '../../../Services/section.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  sectionName:string=''
  constructor(public _AuthService:AuthenticationService , private _sectionService:SectionService){
this.sectionName = this._sectionService.sectionName;

  }
  userToken:any = localStorage.getItem("token");
  ngOnInit(){
  }
}
