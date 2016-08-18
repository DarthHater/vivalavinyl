import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';
import { routing,
         appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, FormsModule],
    bootstrap:    [AppComponent],
    providers:    [HTTP_PROVIDERS, appRoutingProviders],
})
export class AppModule {}