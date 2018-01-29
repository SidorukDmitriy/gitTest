import { ContentComponent } from "./content/content.component";
import { RouterModule } from "@angular/router";
import { ProjectDetails } from "./content/projectDetails/projectDetails.component";

export const routs = [
    { path: "content", component: ContentComponent },
    { path: "content/:id", component: ProjectDetails }       
];

export const routing = RouterModule.forRoot(routs);

