import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  urlParam ; 
  queryParam ='any';
   
  constructor(

    private router: Router,
    private activatedRoute: ActivatedRoute
  
  ) {

    console.log(this.activatedRoute);
    this.urlParam = this.activatedRoute.snapshot.params['someText']
    this.urlParam = this.activatedRoute.snapshot.queryParams['x']

  }

  ngOnInit(): void {
    
  }
  async register() {
    console.log('Register method called');
    await this.router.navigate(['register']);
  }
  


}
