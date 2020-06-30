import { LightningElement, wire, track } from 'lwc';

import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

const DELAY = 300;


export default class HelloWorld extends LightningElement {
  @wire(CurrentPageReference) pageRef;
  @track selectedColors = [];

  connectedCallback() {
    try {
      registerListener('colorSelectedItemsEvent', this.colorSelectedItemsHandler, this);
    }catch(e) {
      console.log(e);
    }
  }

  disconnectedCallback() {
    try {
      unregisterAllListeners(this);
    }catch(e) {
      console.log(e);
    }
  }

  colorSelectedItemsHandler(selectedItems) {
    try {
      console.log("HW: " , selectedItems);
      this.selectedColors = selectedItems;
    }catch(e) {
      console.log(e);
    }
  }

}
