import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../services/login.service';

export interface productsElement {
  id:number
  title: string;
  description: string;
  code: string;
  price: number;
  stock: number;
  status: string;
}
const ELEMENT_DATA: productsElement[] = [
  {id: 1, title: 'Hydrogen', price: 1.0079, description: 'H' , code: '123', stock:2, status:''},
  {id: 2, title: 'Helium', price: 4.0026, description: 'He' , code: '123', stock:2, status:''},
  {id: 3, title: 'Lithium', price: 6.941, description: 'Li' , code: '123', stock:2, status:''},
  {id: 4, title: 'Beryllium', price: 9.0122, description: 'Be' , code: '123', stock:2, status:''},
  {id: 5, title: 'Boron', price: 10.811, description: 'B' , code: '123', stock:2, status:''},
  {id: 6, title: 'Carbon', price: 12.0107, description: 'C' , code: '123', stock:2, status:''},
  {id: 7, title: 'Nitrogen', price: 14.0067, description: 'N' , code: '123', stock:2, status:''},
  {id: 8, title: 'Oxygen', price: 15.9994, description: 'O' , code: '123', stock:2, status:''},
  {id: 9, title: 'Fluorine', price: 18.9984, description: 'F' , code: '123', stock:2, status:''},
  {id: 10, title: 'Neon', price: 20.1797, description: 'Ne' , code: '123', stock:2, status:''},
  {id: 11, title: 'Sodium', price: 22.9897, description: 'Na' , code: '123', stock:2, status:''},
  {id: 12, title: 'Magnesium', price: 24.305, description: 'Mg' , code: '123', stock:2, status:''},
  {id: 13, title: 'Aluminum', price: 26.9815, description: 'Al' , code: '123', stock:2, status:''},
  {id: 14, title: 'Silicon', price: 28.0855, description: 'Si' , code: '123', stock:2, status:''},
  {id: 15, title: 'Phosphorus', price: 30.9738, description: 'P' , code: '123', stock:2, status:''},
  {id: 16, title: 'Sulfur', price: 32.065, description: '2' , code: '123', stock:2, status:''},
  {id: 17, title: 'Chlorine', price: 35.453, description: 'Cl' , code: '123', stock:2, status:''},
  {id: 18, title: 'Argon', price: 39.948, description: 'Ar' , code: '123', stock:2, status:''},
  {id: 19, title: 'Potassium', price: 39.0983, description: 'K' , code: '123', stock:2, status:''},
  {id: 20, title: 'Calcium', price: 40.078, description: 'Ca' , code: '123', stock:2, status:''},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'stock', 'status'];
  dataSource = new MatTableDataSource<productsElement>(ELEMENT_DATA);

  products = [{
    'title':'title',
    'description':'description',
    'code':'code',
    'price':'price',
    'stock':'stock',
    'status':'status',
  }]

  constructor(public dialog: MatDialog, private router:Router, private loginService:LoginService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  login(){
    this.router.navigate(['login']);
  }

  register(){
    this.router.navigate(['register']);
  }
  ngOnInit(): void {
  }

}
