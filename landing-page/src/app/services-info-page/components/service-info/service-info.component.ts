import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-info',
  standalone: true,
  imports: [],
  templateUrl: './service-info.component.html',
  styleUrl: './service-info.component.scss'
})
export class ServiceInfoComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}
  serviceInfoStr: string = ''

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceInfoStr = params.get('serviceType')!.toString();
            
    });
  }
}
