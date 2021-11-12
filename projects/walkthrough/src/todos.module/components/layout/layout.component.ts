import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'todos-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('addTodoField') addTodoInput: ElementRef;
  @ViewChild('todoComp') todoElement: ElementRef;

  newTodo: string = '';

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

  ngAfterViewInit() {
    require('intro.js')()
      .addSteps([
        {
          title: 'Welcome to simple todo App',
          intro:
            'This is where you can add todos. Just enter the text for your todo and press enter.',
          element: this.addTodoInput.nativeElement,
        },
        {
          title: 'Todo Item',
          intro:
            'Here you can see the todo added.<br/>Click the text in todo item to mark it as done.<br/>To edit, press ✏️ button, press enter when done.<br/>To delete it press 🗑️ button to delete the item',
          element: this.todoElement.nativeElement,
        },
      ])
      .start();
  }
}
