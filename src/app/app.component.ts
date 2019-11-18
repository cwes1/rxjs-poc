import { Component, OnInit } from '@angular/core';
import { IViewModel } from 'src/models/iviewmodel';
import { ViewmodelService } from 'src/services/viewmodel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'rxjs-poc';
  viewModel: IViewModel;

  constructor(private service: ViewmodelService){}
  
  ngOnInit() {
    this.viewModel = this.service.getData(5);
    console.log(this.viewModel);
    console.log(this.viewModel.starship);
  }

}
