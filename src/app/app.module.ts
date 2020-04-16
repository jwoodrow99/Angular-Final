import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { NewComponent, NewDialogComponent } from './new/new.component';

import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    NewComponent,
    NewDialogComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 0 }), // changed delay to 0 from 2000
    RouterModule.forRoot([
        { path: 'item/new', component: NewComponent },
        { path: 'item', component: ListComponent },
        { path: '', component: HomeComponent },
        { path: '**', component: NotFoundComponent }
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatRippleModule,
  ],
  entryComponents: [
      NewDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
