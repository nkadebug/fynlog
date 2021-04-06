import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/s/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = "";
  email = "";
  photoUrl = "https://material.angular.io/assets/img/examples/shiba1.jpg";
  constructor(public auth: AuthService) { }

  ngOnInit(): void {

  }

}
