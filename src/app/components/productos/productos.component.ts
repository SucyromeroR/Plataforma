import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  items: any[] | undefined;

  constructor(private http: HttpClient,
    private location: Location,
    private router: Router) { }

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
  goToClientes(id: string) {
    localStorage.setItem('productoId', id.toString());
    this.router.navigate(['/editProduct']);
  }
  add() {
    this.router.navigate(['/addProduct']);
  }
}