import { h } from "@stencil/core";
import { format } from '../../utils/utils';
import moment from 'moment';
export class MyComponent {
    getText() {
        return format(this.first, this.middle, this.last);
    }
    deleteInitialMonth(e) {
        this.textInitMonth.value = "";
        this.toggleEnabledInitialMonth(e);
        this.deleteInitialDay(e);
        this.deleteEndYear(e);
        this.deleteEndMonth(e);
        this.deleteEndDay(e);
    }
    toggleEnabledInitialMonth(e) {
        console.log(e);
        if (this.textInitYear.value != "") {
            this.textInitMonth.disabled = false;
        }
        else {
            this.textInitMonth.disabled = true;
        }
    }
    deleteInitialDay(e) {
        console.log(e);
        this.textInitDay.value = "";
        this.textInitDay.disabled = true;
        this.toggleEnabledInitialDay(e);
        this.deleteEndYear(e);
        this.deleteEndMonth(e);
        this.deleteEndDay(e);
    }
    toggleEnabledInitialDay(e) {
        console.log(e);
        if (this.textInitMonth.value != "") {
            this.textInitDay.disabled = false;
        }
        else {
            this.textInitDay.disabled = true;
        }
    }
    deleteEndYear(e) {
        console.log(e);
        this.textEndYear.value = "";
        this.textEndYear.disabled = true;
        this.deleteEndMonth(e);
        this.deleteEndDay(e);
        this.toggleEnabledEndYear(e);
    }
    toggleEnabledEndYear(e) {
        console.log(e);
        if (this.textInitDay.value != "") {
            this.textEndYear.disabled = false;
        }
        else {
            this.textEndYear.disabled = true;
        }
    }
    deleteEndMonth(e) {
        console.log(e);
        this.textEndMonth.value = "";
        this.textEndMonth.disabled = true;
        this.deleteEndDay(e);
        this.toggleEnabledEndMonth(e);
    }
    toggleEnabledEndMonth(e) {
        console.log(e);
        if (this.textEndYear.value != "") {
            this.textEndMonth.disabled = false;
        }
        else {
            this.textEndMonth.disabled = true;
        }
    }
    deleteEndDay(e) {
        this.textEndDay.value = "";
        this.textEndDay.disabled = true;
        this.toggleEnabledEndDay(e);
    }
    toggleEnabledEndDay(e) {
        console.log(e);
        if (this.textEndMonth.value != "") {
            this.textEndDay.disabled = false;
        }
        else {
            this.textEndDay.disabled = true;
        }
    }
    format() {
        return moment("1995-12-25").format('LLL');
    }
    render() {
        return (h("div", null,
            h("p", null,
                h("input", { ref: el => this.textInitYear = el, id: "initYear", type: "text", placeholder: "yyyy", onKeyPress: (e) => this.deleteInitialMonth(e) }),
                h("input", { ref: el => this.textInitMonth = el, disabled: true, onKeyPress: (e) => this.deleteInitialDay(e), id: "initMonth", name: "mon", type: "text", placeholder: "MM" }),
                h("input", { ref: el => this.textInitDay = el, disabled: true, onKeyPress: (e) => this.deleteEndYear(e), id: "initDay", type: "text", placeholder: "DD" }),
                h("div", null, this.format())),
            h("p", null,
                h("input", { ref: el => this.textEndYear = el, disabled: true, onKeyPress: (e) => this.deleteEndMonth(e), id: "endYear", type: "text", placeholder: "yyyy" }),
                h("input", { ref: el => this.textEndMonth = el, disabled: true, onKeyPress: (e) => this.deleteEndDay(e), id: "endMonth", type: "text", placeholder: "MM" }),
                h("input", { ref: el => this.textEndDay = el, disabled: true, id: "endDay", type: "text", placeholder: "DD" }))));
        //return <div>Hello, World! I'm {this.getText()}</div>; 
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get properties() { return {
        "first": {
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
                "text": "The first name"
            },
            "attribute": "first",
            "reflect": false
        },
        "middle": {
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
                "text": "The middle name"
            },
            "attribute": "middle",
            "reflect": false
        },
        "last": {
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
                "text": "The last name"
            },
            "attribute": "last",
            "reflect": false
        }
    }; }
}
