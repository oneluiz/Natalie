import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FechaService {

	public fecha = new Date();

	constructor() { }

	diasDelMes(): Observable<any> {

		let dias = new Date(this.fecha.getFullYear(), this.fecha.getMonth() + 1, 0).getDate();
		
		return new Observable(observer => {
			observer.next(dias);
		});
	}
}
