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
export async function getLocaleComponentStrings(element) {
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
