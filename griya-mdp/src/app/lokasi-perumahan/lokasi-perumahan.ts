import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lokasi-perumahan',
  standalone: true,
  templateUrl: './lokasi-perumahan.html',
  styleUrls: ['./lokasi-perumahan.css'],
})
export class LokasiPerumahan {
  @Input() numbers!: number;
}
