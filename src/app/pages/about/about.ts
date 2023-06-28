import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
import { RuleTester } from 'eslint';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage implements OnInit{
  profesores$ = collectionData(collection(this.firestore, 'tutors')) as Observable<Task[]>
  ngOnInit() {
  }

  constructor(
    public popoverCtrl: PopoverController,
    private readonly firestore: Firestore
    ) {}
}
export interface Task{
  id: string;
  email: string;
  name: string;
  description: string;
  github: string;
  insta: string;
  location: string;
  title: string;
  twitter: string;
}
