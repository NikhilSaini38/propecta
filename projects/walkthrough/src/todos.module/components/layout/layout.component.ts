import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Step } from 'intro.js';
import { WalkthroughService } from '../../walkthrough.service';

@Component({
  selector: 'todos-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private walkthroughSvc: WalkthroughService) {}

  @ViewChild('addTodoField') addTodoInput: ElementRef<HTMLInputElement>;

  newTodo: string;
  todoWalkthroughSteps: Step[];

  todosList: string[] = ['Walk the plants'];

  deleteTodo(index: number) {
    this.todosList.splice(index, 1);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.todosList[this.todosList.length] = this.newTodo;
      this.newTodo = '';
    }
  }

  updateTodo(index: number, newValue: string) {
    this.todosList[index] = newValue;
  }

  ngOnInit() {
    setTimeout(() => {
      this.walkthroughSvc.enable();
      this.walkthroughSvc.controller.addSteps([
        {
          title: 'Welcome',
          intro:
            "This is a simple todo app. Let's Walk through the features here.",
        },
        {
          title: 'Add new todo',
          intro:
            'Here you can add new todo item. Press enter to submit after typing in.',
          element: this.addTodoInput.nativeElement,
        },
      ]);
    });
  }
}
