import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { InMemoryDataService } from './services/in-memory-data.service';
import { SqlSnippetsComponent } from './sql-snippets/sql-snippets.component';
import { TabsComponent } from './tabs/tabs.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule, MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {UserSignInComponent} from "./user-sign-in/user-sign-in.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SqlSnippetsComponent,
    TabsComponent,
    UserSignInComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
