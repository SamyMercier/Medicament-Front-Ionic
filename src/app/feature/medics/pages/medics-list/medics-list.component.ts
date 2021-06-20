import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private medicService: MedicService) { }

  ngOnInit(): void {
    this.medicService.getAll().subscribe(elems => {
      this.medics = elems;
    });

  }

}
