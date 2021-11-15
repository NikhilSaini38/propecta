import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Step } from 'intro.js';
import { WalkthroughService } from '../../walkthrough.service';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private walkthroughSvc: WalkthroughService) {}

  @Input('content') content: string = '';

  @ViewChild('editField') inputEl: ElementRef<HTMLInputElement>;
  @ViewChild('editButton') editButton: ElementRef;
  @ViewChild('deleteButton') deleteButton: ElementRef;
  @ViewChild('contentElement') contentEl: ElementRef;

  @Output() deleteTodo: EventEmitter<void> = new EventEmitter();
  @Output() updateTodo: EventEmitter<string> = new EventEmitter();

  done: boolean = false;
  editing: boolean = false;
  newContent: string = '';

  toggleDone() {
    this.done = this.done ? false : true;
  }

  toggleEdit() {
    if (!this.editing) {
      this.editing = true;
      setTimeout(() => {
        this.inputEl?.nativeElement.focus();
      });
    } else if (this.editing && this.newContent !== this.content)
      this.updateTodo.emit(this.newContent);
    else this.editing = false;
  }

  onKeyPress(event: KeyboardEvent) {
    event.code === 'Enter' ? this.toggleEdit() : '';
  }

  ngOnInit() {
    this.newContent = this.content;
    setTimeout(() => {
      this.walkthroughSvc.controller.addSteps([
        {
          title: 'Todo Content',
          element: this.contentEl.nativeElement,
          intro:
            'This is the content of a todo. You can click it to mark it as Done or Pending',
        },
        {
          title: 'Edit Button',
          intro: "Press this button to edit this Todo's content",
          element: this.editButton.nativeElement,
        },
        {
          title: 'Delete Button',
          intro: 'Press This button to delete respective Todo',
          element: this.deleteButton.nativeElement,
        },
      ]);
      this.walkthroughSvc.safeStart();
      this.walkthroughSvc.disable();
    });
  }
}
