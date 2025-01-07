import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  message: string = '';
  status: string = '';

  sendMessage() {
      // Simule le traitement du message
      this.status = `Merci pour votre retour nous reviendrons vers vous rapidement.`;
      
      // Réinitialiser les champs
      this.name = '';
      this.message = '';
  }
}
