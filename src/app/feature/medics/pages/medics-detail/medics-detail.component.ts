import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medic } from '../../models/medic';
import { MedicService } from '../../services/medic.service';

@Component({
  selector: 'app-medics-detail',
  templateUrl: './medics-detail.component.html',
  styleUrls: ['./medics-detail.component.css']
})
export class MedicsDetailComponent implements OnInit {

  medic: Medic;

  constructor(private medicService : MedicService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.medicService.getById(id).subscribe(elem => {
      this.medic = elem;
    })
  } 
}
