import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/s/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  title = "FynLog";
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
