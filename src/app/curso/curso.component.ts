import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [AdminComponent],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {

}
