import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './components/layout';
import { TodoComponent } from './components/todo';
import { WalkthroughService } from './walkthrough.service';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule],
  declarations: [LayoutComponent, TodoComponent],
  exports: [LayoutComponent],
  providers: [WalkthroughService],
})
export class TodosModule {}
