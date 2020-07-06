import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any = {};
  notesArray = [];
  constructor() { }

  ngOnInit(): void {
  }

  deleteNotes(note: object): void {
    const index = this.notesArray.findIndex(x => x.title === note[`title`]);
    this.notesArray.splice(index, 1);
  }

  addNotes(): void {
    this.notesArray.push(this.notes);
    this.notes = {};
  }

  trackByMethod(index: number, el: any): string {
    return el.title;
  }
}
