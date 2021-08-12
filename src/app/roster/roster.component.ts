import { Component, OnInit } from '@angular/core';

const URL = 'http://localhost:8000';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  roster = [];

  constructor() { }

  ngOnInit(): void {
    this.fetch_roster();
  }

  async add_student(firstName: String, lastName: String) {
    await this.post_roster(firstName, lastName);
    this.fetch_roster();
  }

  fetch_roster() {
    fetch(URL + "/roster")
      .then(resp => resp.json())
        .then(json => {
          this.roster=json;
        });
  }

  async post_roster(firstName: String, lastName: String) {
    fetch(URL + `/roster?first_name=${firstName}&last_name=${lastName}`, {method: "POST"})
      .then(resp => resp.json())
        .then(json => {
          console.log(json);
        });
  }

}
