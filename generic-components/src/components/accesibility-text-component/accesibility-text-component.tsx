import { Component, Prop, h, Element } from '@stencil/core';
import {getLocaleComponentStrings} from '../../utils/locate'

@Component({
  tag: 'accesibility-text-component',
  styleUrl: 'accesibility-text-component.css',
  shadow: true
})
export class AccesibilityTextComponent {

  
  private maxSize;
  private minSize;
  private normalSize;

  @Prop() lang: string;

  constructor(){
    this.loadParameters();
  }

  async loadParameters(): Promise<any> {
    let options = await new Promise((resolve, reject): void => {
      fetch(`/config/config-components.celula.json`)
          .then((result) => {
              if (result.ok) resolve(result.json());
              else reject();
          }, () => reject()); 
  });

  console.log("options:", options)

      this.normalSize = options.accesibility.text.normal;
      this.minSize = options.accesibility.text.min;
      this.maxSize = options.accesibility.text.max;

}

  @Element() element: HTMLElement;
  strings: any;
  async componentWillLoad(): Promise<any> {
    this.strings = await getLocaleComponentStrings(this.element);
  }

  normalClick(e) {
    console.log('Normal', e);

    let components = document.getElementsByClassName("main-text")
    console.log("components:", components)
    for (let co of components){
      co.setAttribute("style", "font-size: "+this.normalSize+"px;")
      console.log("co: ", co)
    }
  }

  plusClick(e) {
    console.log('Mas', e);

    let components = document.getElementsByClassName("main-text")
    console.log("components:", components)
    for (let co of components){
      co.setAttribute("style", "font-size: "+this.maxSize+"px;")
      console.log("co: ", co)
    }
  }

  minusClick(e) {
    console.log('Mas', e);

    let components = document.getElementsByClassName("main-text")
    console.log("components:", components)
    for (let co of components){
      co.setAttribute("style", "font-size: "+this.minSize+"px;")
      console.log("co: ", co)
    }
  }

  enClick(e) {
    console.log("lang: ", this.lang)
    this.lang = 'es'
    this.componentWillLoad()
  }

  esClick(e) {
    console.log("lang: ", this.lang)
    this.lang = 'en'
    this.componentWillLoad()
  }

  render() {

    return (<div class="container" width="100" height="100">
            
            <div class="es-button" onClick={(e) => this.esClick(e)}>
            ES
            </div>

            <div class="en-button" onClick={(e) => this.enClick(e)}>
            EN
            </div>
            
            <div class="normal-button" onClick={(e) => this.normalClick(e)}>
            {this.strings.normal} 
            </div>
            <div class="plus-button" onClick={(e) => this.plusClick(e)}>
            {this.strings.plus} 
            </div>
            <div class="minus-button" onClick={(e) => this.minusClick(e)}>
            {this.strings.minus} 
            </div>
            </div>);
  }
}
