import Handlebars from "handlebars";

export const getChild = (parent, child) => {
    return parent[child];
}

const registerHelpers = () => {
    Handlebars.registerHelper("getChildByKey", (parent, key) => {
        return parent[key]
    })
}

export const compileToParsableHTML = (templateString = "", values = {}) => {
    registerHelpers()
    const template = Handlebars.compile(templateString);
    return template(values);
}