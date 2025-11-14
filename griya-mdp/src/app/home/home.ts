import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Housing, LokasiPerumahan } from '../lokasi-perumahan/lokasi-perumahan';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [LokasiPerumahan, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  housingList: Housing[] = [...];
  filteredList: Housing[] = [];
  selectedFilter: string = 'all';
  
  ngOnInit() {
    this.filteredList = [...this.housingList];
  }
  
  filterByType(type: string) {
    this.selectedFilter = type;
    if (type === 'all') {
      this.filteredList = [...this.housingList];
    } else {
      this.filteredList = this.housingList.filter(h => h.type === type);
    }
  }
  
  isFilterActive(type: string): boolean {
    return this.selectedFilter === type;
  }
}