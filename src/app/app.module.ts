import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BackgroundComponent } from './@Components/background/background.component';
import { BackgroundModule } from './@Components/background/background.module';
import { ContactFormComponent } from './@Components/contact-form/contact-form.component';
import { ContactFormModule } from './@Components/contact-form/contact-form.module';
import { FooterComponent } from './@Components/footer/footer.component';
import { FooterModule } from './@Components/footer/footer.module';
import { HeaderComponent } from './@Components/header/header.component';
import { HeaderModule } from './@Components/header/header.module';
import { MainComponent } from './@Components/main/main.component';
import { MainModule } from './@Components/main/main.module';
import { MoreInfoComponent } from './@Components/more-info/more-info.component';
import { MoreInfoModule } from './@Components/more-info/more-info.module';
import { SocialMediaComponent } from './@Components/social-media/social-media.component';
import { SocialMediaModule } from './@Components/social-media/social-media.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BackgroundModule,
    HeaderModule,
    MainModule,
    MoreInfoModule,
    SocialMediaModule,
    ContactFormModule,
    FooterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
