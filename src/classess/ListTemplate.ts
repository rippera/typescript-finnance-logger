import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasFormatter, heading: string, position: 'start' | 'end') {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.appendChild(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.appendChild(p);
    if (position === 'start') {
      this.container.prepend(li);
    } else {
      this.container.appendChild(li);
    }
  }
}
