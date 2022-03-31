import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftwareService } from '../../core/service/software.service';
import { Software } from '../../model/software.interface';

@Component({
  selector: 'app-software-id',
  templateUrl: './software-id.component.html',
  styleUrls: ['./software-id.component.css']
})
export class SoftwareIdComponent implements OnInit, OnDestroy {

  sub: any;
  param: string | null;
  id: string;
  software: Software;
  params: any;
    
  constructor(private activatedroute: ActivatedRoute, private router: Router, private softwareService: SoftwareService) {
    this.param = "";
    this.id = "";
  }

    isDefined<T>(value: T | undefined | null): value is T {
      return <T>value !== undefined && <T>value !== null;
    }

    ngOnInit() {
      this.sub=this.activatedroute.paramMap.subscribe(params => { 
        this.param = params.get('id');
        if (this.isDefined(this.param)) {
          this.id = this.param;
        }
        this.softwareService.find(this.id).subscribe(resp => 
          this.software = resp
        );
      });     
    }
  
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
    
    back(): void {
      this.router.navigate(['']);
    }
}
