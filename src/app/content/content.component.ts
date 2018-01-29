import { Component, ViewEncapsulation } from '@angular/core';
import { ContentModule } from "./content.module";


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core/src/metadata/directives';
import { debug } from 'util';


const categories = ["Agriculture", "Finance"];
var projects: ContentModule[] = [
    { id: 1 , name: "Sowing", exerpt: "Кто посеет, тот и пожмёт",  category: "Agriculture", 
     runCount: 1},
    { id: 2 , name: "Harvesting", exerpt: "Я посеял, я и пожал",  category: "Agriculture", 
     runCount: 1},
    { id: 3 , name: "Macroeconomics", exerpt: "Экономика мира",  category: "Finance", 
     runCount: 1},
    { id: 4 , name: "Microeconomics", exerpt: "Экономика внутри страны",  category: "Finance", 
     runCount: 1}
];


@Component({
  moduleId: module.id,
  selector: "content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
  
})
export class ContentComponent {       

  categories = categories;  
  selectedCategory: string;
  temp:string = '';  
  projects = projects;
    
  public projectName:string;
  public description:string;
  public category:string;
  public id = 4;

  changeTemp(t:string) {
      this.temp = t;
  }

  closeResult: string;
  
  constructor(private modalService: NgbModal) {
    //    if (localStorage.length != 0) {
    //      this.projects = JSON.parse(localStorage.getItem("projects"));
    //    }       
            
  }
  
  open(content) {
      this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  
  addProject(event, category, name, description) {
      this.category = category;
      this.projectName = name;
      this.description = description;      
      this.id++;
      console.log(this.id);
      projects.push({id: this.id, name:name, exerpt:description, category:category, runCount: 1});
    //   localStorage.setItem("projects", JSON.stringify(projects));    
      
  } 
  
}