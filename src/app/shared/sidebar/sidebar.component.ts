import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/software.interface';
import { SoftwareService } from '../../core/service/software.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selectedName: string | null;

  categories: Category[] = [];

  constructor(private service: SoftwareService, private router: Router) { 
    this.selectedName = "";
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(resp => 
      this.categories = resp
    );
  }
  
  gotoItem(name: string) {
    localStorage.setItem('name', name);
    this.router.navigate(['/list/'+ name ]);
  }

}
