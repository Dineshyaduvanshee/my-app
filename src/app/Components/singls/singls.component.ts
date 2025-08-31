import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-singls',
  templateUrl: './singls.component.html',
  styleUrls: ['./singls.component.css'] // corrected from styleUrl to styleUrls
})
export class SinglsComponent {
  count = signal(10);
  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());
  data: WritableSignal<number | string> = signal(10); // correct usage
  // countt:Signal<number> = computed(()=>200);
  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }

  updateSignal() {
    this.data.set("Hello"); // you can update the signal value
    //this.data.set(this.data() + 1);
  }

  updateValue(val: string) {
    if (val === 'Inc') {
      this.count.set(this.count() + 1);
    } else {
      this.count.set(this.count() - 1);
    }
  }
  showValue(){
    console.log(this.z());
    // this.x = 100;
    // this.z = this.x + this.y;
    // console.log(this.z);
    this.x.set(100);
    console.log(this.z());
  }
  updateX(){
    this.x.set(this.x() + 10);
  }
}
