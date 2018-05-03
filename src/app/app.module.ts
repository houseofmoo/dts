import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home-component/home.component';

import { BuyersModule } from './buyers/buyers.module';
import { ExhibitorsModule } from './exhibitors/exhibitors.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: "home", component: HomeComponent },
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "**", redirectTo: "home", pathMatch: "full" }
        ]),
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        BuyersModule,
        ExhibitorsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
