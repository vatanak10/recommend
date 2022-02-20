import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  likes: any;

  constructor(private dataService: DataService) {
    this.likes = this.dataService.getLikes();
  }

  ngOnInit(): void {
  }

}
