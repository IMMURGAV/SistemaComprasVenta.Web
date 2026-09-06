import { Injectable, inject } from '@angular/core'; import { HttpClient } from '@angular/common/http'; import { Observable } from 'rxjs'; import { Producto,Operacion,ResumenKardex,MovimientoProducto } from '../entidades/modelos';
@Injectable({providedIn:'root'}) export class ApiServicio { private http=inject(HttpClient); private url='http://localhost:5226/api';
 autenticar(usuario:string,clave:string):Observable<{token:string}> {return this.http.post<{token:string}>(`${this.url}/autenticacion/token`,{usuario,clave});}
 listarProductos(){return this.http.get<Producto[]>(`${this.url}/productos`);} registrarProducto(producto:Partial<Producto>){return this.http.post<Producto>(`${this.url}/productos`,producto);}
 registrarCompra(operacion:Operacion){return this.http.post(`${this.url}/compras`,operacion);} registrarVenta(operacion:Operacion){return this.http.post(`${this.url}/ventas`,operacion);}
 resumenKardex(){return this.http.get<ResumenKardex[]>(`${this.url}/kardex/resumen`);} movimientosProducto(id:number){return this.http.get<MovimientoProducto[]>(`${this.url}/kardex/producto/${id}`);}
}
