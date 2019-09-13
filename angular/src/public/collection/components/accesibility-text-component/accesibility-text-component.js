import { h } from "@stencil/core";
import { getLocaleComponentStrings } from '../../utils/locate';
export class AccesibilityTextComponent {
    constructor() {
        this.maxSize = 50;
        this.minSize = 5;
        this.normalSize = 30;
    }
    async componentWillLoad() {
        this.strings = await getLocaleComponentStrings(this.element);
    }
    normalClick(e) {
        console.log('Normal', e);
        let components = document.getElementsByClassName("main-text");
        console.log("components:", components);
        for (let co of components) {
            co.setAttribute("style", "font-size: " + this.normalSize + "px;");
            console.log("co: ", co);
        }
    }
    plusClick(e) {
        console.log('Mas', e);
        let components = document.getElementsByClassName("main-text");
        console.log("components:", components);
        for (let co of components) {
            co.setAttribute("style", "font-size: " + this.maxSize + "px;");
            console.log("co: ", co);
        }
    }
    minusClick(e) {
        console.log('Mas', e);
        let components = document.getElementsByClassName("main-text");
        console.log("components:", components);
        for (let co of components) {
            co.setAttribute("style", "font-size: " + this.minSize + "px;");
            console.log("co: ", co);
        }
    }
    enClick(e) {
        console.log("lang: ", this.lang);
        this.lang = 'es';
        this.componentWillLoad();
    }
    esClick(e) {
        console.log("lang: ", this.lang);
        this.lang = 'en';
        this.componentWillLoad();
    }
    render() {
        return (h("div", { class: "container", width: "100", height: "100" },
            h("div", { class: "es-button", onClick: (e) => this.esClick(e) }, "ES"),
            h("div", { class: "en-button", onClick: (e) => this.enClick(e) }, "EN"),
            h("div", { class: "normal-button", onClick: (e) => this.normalClick(e) }, this.strings.normal),
            h("div", { class: "plus-button", onClick: (e) => this.plusClick(e) }, this.strings.plus),
            h("div", { class: "minus-button", onClick: (e) => this.minusClick(e) }, this.strings.minus)));
    }
    static get is() { return "accesibility-text-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["accesibility-text-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["accesibility-text-component.css"]
    }; }
    static get properties() { return {
        "lang": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lang",
            "reflect": false
        }
    }; }
    static get elementRef() { return "element"; }
}
