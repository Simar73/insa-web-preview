import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Banner } from './components/banner/banner';
import { Hero } from './components/hero/hero';
import { StatsStrip } from './components/stats-strip/stats-strip';
import { WhatWeDo } from './components/what-we-do/what-we-do';
import { BatFramework } from './components/bat-framework/bat-framework';
import { Expertise } from './components/expertise/expertise';
import { Team } from './components/team/team';
import { TestimonialsCorporate } from './components/testimonials-corporate/testimonials-corporate';
import { TestimonialsTraining } from './components/testimonials-training/testimonials-training';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    Navbar,
    Banner,
    Hero,
    StatsStrip,
    WhatWeDo,
    BatFramework,
    Expertise,
    Team,
    TestimonialsCorporate,
    TestimonialsTraining,
    Contact,
    Footer,
  ],
  imports: [BrowserModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
