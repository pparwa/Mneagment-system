import { HasFormat } from "../interfaces/HasFormat";

export class ListTemplate {

    constructor(private ul:HTMLUListElement){}
    render(item : HasFormat , heading :string,pos: 'start' | 'end'){
        let li = document.createElement('li')

        const h4 = document.createElement('h4')
        h4.innerText = heading
        li.append(h4)
        const p = document.createElement("p")
        p.innerHTML= item.format()
        li.append(p)

        if(pos === 'start'){
            this.ul.prepend(li)
        }
        else{
            this.ul.append(li)
        }

    }



}