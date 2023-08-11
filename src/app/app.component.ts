import { Component } from '@angular/core';

const DATA = {
  name: 'Hierarchy',
  items: [
    {
      id: 2715,
      name: 'Jane Smith',
      items: [
        {
          id: 3456,
          name: 'Robert Johnson',
          items: [
            {
              id: 4623,
              name: 'Emily Davis',
              items: [
                {
                  id: 5861,
                  name: 'Michael Wilson',
                  items: [],
                },
                {
                  id: 6178,
                  name: 'Olivia Thomas',
                  items: [],
                },
              ],
            },
            {
              id: 6554,
              name: 'Smith Brown',
              items: [],
            },
          ],
        },
        {
          id: 7012,
          name: 'Sophia Taylor',
          items: [
            {
              id: 8325,
              name: 'Matthew Brown',
              items: [
                {
                  id: 61278,
                  name: 'Olivia Thomas',
                  items: [],
                },
                {
                  id: 96554,
                  name: 'Tesla Nicolas',
                  items: [],
                },
              ],
            },
            {
              id: 8749,
              name: 'Ava Martinez',
              items: [],
            },
            {
              id: 9076,
              name: 'Ethan Clark',
              items: [],
            },
          ],
        },
        {
          id: 9423,
          name: 'Isabella Rodriguez',
          items: [
            {
              id: 10276,
              name: 'Mia Lopez',
              items: [],
            },
            {
              id: 10798,
              name: 'Benjamin Lee',
              items: [],
            },
            {
              id: 11247,
              name: 'Charlotte Perez',
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 11832,
      name: 'Daniel Martin',
      items: [
        {
          id: 12255,
          name: 'Matthew Lewis',
          items: [],
        },
        {
          id: 12682,
          name: 'Emma Thompson',
          items: [],
        },
        {
          id: 13015,
          name: 'Andrew Walker',
          items: [],
        },
      ],
    },
    {
      id: 13459,
      name: 'Grace Turner',
      items: [
        {
          id: 13892,
          name: 'Alexander Harris',
          items: [],
        },
        {
          id: 14435,
          name: 'Victoria Nelson',
          items: [],
        },
        {
          id: 14877,
          name: 'Henry Adams',
          items: [],
        },
      ],
    },
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cloudsek';
  data = DATA;
  public isItems: boolean = false;
  public Items: any;
  
  public expand(item: any) {
    if (item.items && item.items.length > 0 && this.isItems == false) {
      this.isItems = true;
      this.Items = item.items;
    }else if(this.isItems == true){
      this.isItems = false;
    }
  }
}
