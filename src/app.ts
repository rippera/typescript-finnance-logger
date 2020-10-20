import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice } from './classess/Invoice.js';
import { Payment } from './classess/Payment.js';
import { ListTemplate } from './classess/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('mishka', 'web work', 2500);
// docTwo = new Payment('mego.ge', 'pay for work', 2500);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// docs.forEach((document) => {
//   console.log(document);
// });

const form = document.querySelector('#docsForm') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, 'end');
});
