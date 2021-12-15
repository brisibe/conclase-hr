import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {

  taskForm: FormGroup;

  todo: string[] = [
    "Create navbar component",
    "Design authentication system",
    "Write documentation for components",
    "Interview available candidates"
  ];

  doing: string[] = [
  ]



  done: string[] = [
  ];

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      task: ['', Validators.required]
    })
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addTask() {
    this.todo.push(this.taskForm.get('task')?.value)
  }


}
