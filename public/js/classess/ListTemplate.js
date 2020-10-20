export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.appendChild(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.appendChild(p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.appendChild(li);
        }
    }
}
