import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lokasi-perumahan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lokasi-perumahan.html',
  styleUrl: './lokasi-perumahan.css'
})
export class LokasiPerumahan {
  // Nanti bisa ditambahkan @Input() untuk menerima data dari parent
}