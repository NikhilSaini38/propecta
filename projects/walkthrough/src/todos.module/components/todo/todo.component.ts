import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input('content') content: string = '';

  @ViewChild('editField') input: ElementRef<HTMLInputElement>;

  @Output() deleteTodo = new EventEmitter();
  @Output() updateTodo = new EventEmitter();

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
        this.input?.nativeElement.focus();
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
  }
}
