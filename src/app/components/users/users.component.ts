import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 
  items: any[] | undefined;

  constructor(private http: HttpClient, private location: Location,  private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://olsmidtgt6.execute-api.us-east-2.amazonaws.com/Dev/alldata')
      .subscribe(
        response => {
          this.items = response;
        },
        error => {
          console.log(error);
        }
      );
  }
  goBack(): void {
    this.location.back();
  }
  goToClientes() {
    
    this.router.navigate(['/editUser']);
  }

  add() {
    this.router.navigate(['/addUser']);
  }

}
