import { Component } from '@angular/core';
import { AuthenticationService } from '../../../Services/authentication.service';
import { SectionService } from '../../../Services/section.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userData:any ={};

  constructor(public _AuthService: AuthenticationService) {
    this._AuthService.getUserData().subscribe({
      next:res=>{
        console.log(res);
        this.userData=res.data
        console.log(this.userData);
        
      },
      error:err=>console.log(err)
      
      
    })
  }
  userToken: any = localStorage.getItem("token");
  
  ngOnInit() {

  }
}
