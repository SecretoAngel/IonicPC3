import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
import { RuleTester } from 'eslint';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage implements OnInit{
  speakers: any[] = [];
  temas$ = collectionData(collection(this.firestore, 'tfg')) as Observable<Task[]>
  ngOnInit() {
  }
  constructor(
    public confData: ConferenceData,
    private readonly firestore: Firestore
  ) {}
}
export interface Task{
  titulo: string;
}
