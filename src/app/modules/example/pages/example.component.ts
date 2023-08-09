import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  constructor(private readonly exampleService: ExampleService) {}
}
