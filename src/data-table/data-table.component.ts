import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  data = [
    { 
      firstname: 'Mike',
      lastname: 'Scofield',
      mail: 'max@scofield.com'
    },
    {
      firstname: 'Susan',
      lastname: 'McDonald',
      mail: 'susan@example.com'
    }
  ];

}
