import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styles: [],
})
export class InputSearchComponent implements OnInit {
  //
  termino: string = '';
  debouncer: Subject<string> = new Subject();

  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = 'país';
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(500)).subscribe(() => {
      this.OnDebounce.emit(this.termino);
    });
  }
}
