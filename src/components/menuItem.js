const innerTemplate = document.createElement("template");
innerTemplate.innerHTML =  `
<style>
@import '/public/style.css';
</style>

<a href="">
<li class="menu-item-component"> 
<p class="inner-text"><slot></slot></p>

</li>
</a>
`;

class InnerItem extends HTMLElement {
    constructor() {
        super();
        
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(innerTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector("a").href = this.getAttribute("href");
    
    }

}


const itemTemplate = document.createElement("template");
itemTemplate.innerHTML =  `
<style>
@import '/public/style.css';
</style>

<a href="">
<li class="menu-item-component"> 
<img id="category-icon" src="">
    <p></p>
    <div class="category-dropdown-inner">
        <ul><slot><inner-item></inner-item></slot></ul>
    </div>
<img id="right-arrow" src="/public/img/right-arrow.svg" alt="">

</li>
</a>
`;

class MenuItem extends HTMLElement {
    constructor() {
        super();
        
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(itemTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector("a").href = this.getAttribute("href");
    this.shadowRoot.querySelector("#category-icon").src = this.getAttribute("icon");
    this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("name");

    }

}



window.customElements.define("inner-item", InnerItem);

window.customElements.define("menu-item", MenuItem);

