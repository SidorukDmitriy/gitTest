import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { routing } from './app.routes';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { ProjectDetails } from "./content/projectDetails/projectDetails.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
    ProjectDetails
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
