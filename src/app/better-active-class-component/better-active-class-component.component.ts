import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-better-active-class-component',
  templateUrl: './better-active-class-component.component.html',
  styleUrls: ['./better-active-class-component.component.scss']
})
export class BetterActiveClassComponentComponent implements OnInit {

  isActive = new BehaviorSubject<boolean>(false);
  isActive2 = true

  ngOnInit() {
    console.log('APP ngOnInit');

    this.isActive.subscribe((data) => {
      console.log("this.isActive.subscribe", data);

      this.changeClass(data);
    })
  }


  activeClass = {
    'd-none': !this.isActive,
    'd-flex': this.isActive
  }
  activeClass2 = {
    'd-none': !this.isActive,
    'd-flex': this.isActive
  }

  changeClass(isActive: any) {
    this.activeClass = {
      'd-none': !isActive,
      'd-flex': isActive
    }
  }

  changeClass2(isActive: any) {
    return {
      'd-none': !isActive,
      'd-flex': isActive
    }
  }

  doClick() {
    this.isActive.next(!this.isActive.value)
  }

  doClick2() {
    this.isActive2 = !this.isActive2
    this.activeClass2 = this.changeClass2(this.isActive2)
  }

}
