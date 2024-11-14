import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
 
  @Input() user: any;
  @Output() editComplete = new EventEmitter<void>();
  
  editProfile(){
    //envoyer un form a l'api
    this.editComplete.emit();
  }
} 
