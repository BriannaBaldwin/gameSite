import { Component, OnInit } from '@angular/core';
import { ICreators } from './creators.model';
import { CreatorsService } from './creators.service';

@Component({
  selector: 'creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
})
export class CreatorsComponent implements OnInit {

  creators!: ICreators[];

  constructor(private creatorsService: CreatorsService) {}

  ngOnInit(): void {
    this.creators = this.creatorsService.getCreators();
  }
}
