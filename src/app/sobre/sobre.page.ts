import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonButton ,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SobrePage implements OnInit {

constructor(private router: Router) {}

  ngOnInit() {
  }

    
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
