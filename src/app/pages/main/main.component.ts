import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftwareService } from 'src/app/core/service/software.service';
import { Software } from 'src/app/model/software.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  selectedName: string | null;

  softwareList: Software[] = [];

  constructor( private softwareService: SoftwareService, private router: Router) { 
    this.selectedName = "";
  }
  
  ngOnInit(): void {
    this.softwareService.getSoftware().subscribe(resp => 
      this.softwareList = resp
    );
  }

  gotoItem(id: number) {
    this.router.navigate(['/software/'+ id ]);
  }
}

