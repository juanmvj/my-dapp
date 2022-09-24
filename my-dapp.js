import {LitElement, html,css} from 'lit';
import GUN from "https://cdn.skypack.dev/gun";


export class MyDapp extends LitElement{
    static get styles(){
        return css`
        *{
            color:red;
        }`
    }

    static get properties(){
        return{
            test:{type:String}
        }
    }
    firstUpdated(){
       const db = GUN();
        this.alice = db.get('alice').put({name: 'alice', age: 22}); 
        
    }

    constructor(){
        super();
        this.test = 'my Dapp cool';
    }

    render(){
        return html`
        <p>Esta es ${this.alice}</p>
        <button @click="${this.clickHandler}">test</button>
        <slot></slot>
        `;
    }
    clickHandler(){
        this.alice.on(function(node){
            console.log('Subscribed to Alice!', node);
          });
    }
}
window.customElements.define('my-dapp',MyDapp);