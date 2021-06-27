import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medic } from '../../models/medic';
import { MedicService } from '../../services/medic.service';

@Component({
  selector: 'app-medics-list',
  templateUrl: './medics-list.component.html',
  styleUrls: ['./medics-list.component.css']
})
export class MedicsListComponent implements OnInit {

  @Input() id: number;

  medics: Medic[];

  constructor(private medicService: MedicService, private router: Router) { }

  ngOnInit(): void {
    this.medicService.getAll().subscribe(elems => {
      console.log(elems);
      this.medics = elems;
    });
  }

  goToUpdate(id: string){
    console.log(id)
     this.router.navigateByUrl('/medics/update/' + id,{})
   }

}
