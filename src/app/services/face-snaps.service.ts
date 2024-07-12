import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] =[
        new FaceSnap(
          'Archibald',
          'Mon meilleur ami depuis tout petit !',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date(),
          0
        ),
        new FaceSnap(
          'Three rock mountain',
          'Un endroit magnifique pour les randonnées',
          'https://cdn.pixabay.com/photo/2021/08/17/12/56/rocky-mountain-6553004_1280.jpg',
          //'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Moutain_Southern_Tor.jpeg/2880px-Three_Rock_Moutain_Southern_Tor.jpg',
          new Date(),
          0
        ).withLocation('à la montagne'),
        new FaceSnap(
          'Un bon repas',
          'Mmh que c\'est bon !',
          'https://cdn.pixabay.com/photo/2014/05/03/14/21/meals-337073_1280.jpg',
          //'https://wtop.com/wp-content/upload/2020/06/HEALTHYFRESH.jpg',
          new Date(),
          0
        )
  
      ];
  
    
    getFaceSnaps(): FaceSnap[] {
      return [...this.faceSnaps];
    }
    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.snap(snapType);
     }
}