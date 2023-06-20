import { Component } from '@angular/core';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent {
  password: string = '';
  //Головна функція перевірки
checkPass(){
if(this.password.length >= 8 ){
   if(this.SimplePass() ){
    this.setRed();
  }
  if(this.NormalPass() ){
    this.setYellow();
  }
  if(this.GoodPass()){
    this.setGreen();
  }
}
else if(this.password.length >0){
  this.setRedAll();
}
else{
  this.setGray();
 }

}


//Перевірки на надійність
  SimplePass() {//Тільки літери/цифри/символи - пароль простий
    return /^[A-Za-z]+$/.test(this.password) || /^\d+$/.test(this.password) || /^[\W_]+$/.test(this.password);
  }
  NormalPass() {//Комбінація букв-символів/літер-цифр/цифр-символів - пароль середній
    const hasLetters = /[A-Za-z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[\W_]/.test(this.password);
    return (hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols);
  }
GoodPass(){//Містить букви, символи та цифри - пароль надійний
  const hasLetters = /[A-Za-z]/.test(this.password);
  const hasDigits = /\d/.test(this.password);
  const hasSymbols = /[\W_]/.test(this.password);
  return hasLetters && hasDigits && hasSymbols;
}
//Видалення попередніх стилів
clearIndicators() {
  const indicators = document.querySelectorAll('.indicators');
  if (indicators) {
    indicators.forEach((indicator) => {
      indicator.classList.remove('gray', 'red', 'yellow', 'green');
    });
  }
}
//Функції для зміни кольору

  setRedAll() {
    this.clearIndicators();
    const indicator1 = document.querySelector('.indicator1');
    if (indicator1) {
      indicator1.classList.add('red');
    }
    const indicator2 = document.querySelector('.indicator2');
    if (indicator2) {
      indicator2.classList.add('red');
    }
    const indicator3 = document.querySelector('.indicator3');
    if (indicator3) {
      indicator3.classList.add('red');
    }
  }
  setRed() {
    this.clearIndicators();
    const indicator1 = document.querySelector('.indicator1');
    if (indicator1) {
      indicator1.classList.add('red');
    }
    const indicator2 = document.querySelector('.indicator2');
    if (indicator2) {
      indicator2.classList.add('gray');
    }
    const indicator3 = document.querySelector('.indicator3');
    if (indicator3) {
      indicator3.classList.add('gray');
    }
  
  }
  setYellow() {
    this.clearIndicators();
    const indicator1 = document.querySelector('.indicator1');
    if (indicator1) {
      indicator1.classList.add('yellow');
    }
    const indicator2 = document.querySelector('.indicator2');
    if (indicator2) {
      indicator2.classList.add('yellow');
    }
    const indicator3 = document.querySelector('.indicator3');
    if (indicator3) {
      indicator3.classList.add('gray');
    }
  }
setGray() {
    this.clearIndicators();
    const indicator1 = document.querySelector('.indicator1');
    if (indicator1) {
      indicator1.classList.add('gray');
    }
    const indicator2 = document.querySelector('.indicator2');
    if (indicator2) {
      indicator2.classList.add('gray');
    }
    const indicator3 = document.querySelector('.indicator3');
    if (indicator3) {
      indicator3.classList.add('gray');
    }
  }
 
  setGreen() {
    this.clearIndicators();
    const indicator1 = document.querySelector('.indicator1');
    if (indicator1) {
      indicator1.classList.add('green');
    }
    const indicator2 = document.querySelector('.indicator2');
    if (indicator2) {
      indicator2.classList.add('green');
    }
    const indicator3 = document.querySelector('.indicator3');
    if (indicator3) {
      indicator3.classList.add('green');
    }
  }
}
