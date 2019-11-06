import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-carousel',
  templateUrl: './client-carousel.component.html',
  styleUrls: ['./client-carousel.component.scss']
})
export class ClientCarouselComponent implements OnInit {

  responsiveOptions: any;
  clients: any[];

  constructor(private clientService: ClientService) {
    this.responsiveOptions = [
      {
        breakpoint: '900px',
        numVisible: 6,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.clientService.getAllClients().subscribe((response: any) => {
      this.clients = response;
    });
  }

}
