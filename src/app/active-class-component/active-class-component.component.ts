import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-class-component',
  templateUrl: './active-class-component.component.html',
  styleUrls: ['./active-class-component.component.scss']
})

export class ActiveClassComponentComponent {
  title = 'active-class';
  isActive = false;
  isColorKey = 'primary';
  str = '';
  myNewStr = ''

  activeClass = {
    'd-none': !this.isActive,
    'd-flex': this.isActive
  }

  changeClass(isActive: any) {

    return {
      'd-none': !isActive,
      'd-flex': isActive
    }
  }

  doClick() {
    this.activeClass = this.changeClass(this.isActive)
  }

  ngOnInit() {
    console.log('ActiveClassComponentComponent ngOnInit');

  }

  changeStr() {
    this.str = "d-none"
    this.myNewStr = this.str
  }

  isShow() {
    this.isActive = !this.isActive
  }
  isChangeColorPrimary() {
    this.isColorKey = 'primary';
  }
  isChangeColorSecondary() {
    this.isColorKey = 'secondary';
  }
  isRemoveColor() {
    this.isColorKey = '';
  }

  returnIsActive() {
    console.log("returnIsActive")
    return this.isActive
  }
  returnIsStr() {
    return this.str
  }

  returnActiveColorByString() {
    if (this.isColorKey === 'primary') return 'text-primary'
    if (this.isColorKey === 'secondary') return 'text-secondary'
    return ''
  }
  returnActiveColorByArray() {
    if (this.isColorKey === 'primary') return ['text-primary']
    if (this.isColorKey === 'secondary') return ['text-secondary']
    return ['']
  }
  returnActiveColorByObject() {
    if (this.isColorKey === 'primary') return { 'text-primary': true }
    if (this.isColorKey === 'secondary') return { 'text-secondary': true }
    return {}
  }

  //也就是說如果我用模板語法來寫，會讓
  activeReturnNewStr() {
    console.log("testOutAngular RUNNING")
    const oldStr = this.returnIsStr()
    const newStr = JSON.parse(JSON.stringify(oldStr));
    return newStr
  }
}
