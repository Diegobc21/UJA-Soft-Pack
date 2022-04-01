import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftwareService } from '../../core/service/software.service';
import { Software } from '../../model/software.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  param: string | null;

  sub: any;

  name: string;

  softwareList: Software[] = [];

  constructor( private activatedroute: ActivatedRoute, private softwareService: SoftwareService, private router: Router) { 
    this.name = "";
    this.param = "";
  }

  isDefined<T>(value: T | undefined | null): value is T {
    return <T>value !== undefined && <T>value !== null;
  }
  
  ngOnInit() {
    this.sub = this.activatedroute.paramMap.subscribe(params => { 
      // this.param = params.get('name');
      this.param = localStorage.getItem('name');
      // console.log(this.param);
      if (this.isDefined(this.param)) {
        this.name = this.param;
      }
      this.softwareService.findByCategory(this.name).subscribe(resp => 
        this.softwareList = resp
      );
    });     
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoItem(id: number) {
    this.router.navigate(['/software/'+ id ]);
  }

}
