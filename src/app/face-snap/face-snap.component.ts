import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle, UpperCasePipe,DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,UpperCasePipe,DatePipe,DecimalPipe,PercentPipe,CurrencyPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService) {}
  
  snapButtonText!: string;
  userHasSnapped!: Boolean;


  
  
  ngOnInit() : void {
    this.snapButtonText = 'Oh Snap!';
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();

    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  
  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }}