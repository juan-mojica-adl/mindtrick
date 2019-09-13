import { r as registerInstance, h, c as getElement } from './core-14fa86c3.js';

function getComponentClosestLanguage(element) {
    let closestElement = element.closest('[lang]');
    return closestElement ? closestElement.lang : 'en';
}
function fetchLocaleStringsForComponent(componentName, locale) {
    return new Promise((resolve, reject) => {
        fetch(`/i18n/${componentName}.i18n.${locale}.json`)
            .then((result) => {
            if (result.ok)
                resolve(result.json());
            else
                reject();
        }, () => reject());
    });
}
async function getLocaleComponentStrings(element) {
    let componentName = element.tagName.toLowerCase();
    let componentLanguage = getComponentClosestLanguage(element);
    let strings;
    try {
        strings = await fetchLocaleStringsForComponent(componentName, componentLanguage);
    }
    catch (e) {
        strings = await fetchLocaleStringsForComponent(componentName, 'en');
    }
    return strings;
}

const AccesibilityTextComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { class: "container", width: "100", height: "100" }, h("div", { class: "es-button", onClick: (e) => this.esClick(e) }, "ES"), h("div", { class: "en-button", onClick: (e) => this.enClick(e) }, "EN"), h("div", { class: "normal-button", onClick: (e) => this.normalClick(e) }, this.strings.normal), h("div", { class: "plus-button", onClick: (e) => this.plusClick(e) }, this.strings.plus), h("div", { class: "minus-button", onClick: (e) => this.minusClick(e) }, this.strings.minus)));
    }
    get element() { return getElement(this); }
    static get style() { return ""; }
};

export { AccesibilityTextComponent as accesibility_text_component };
