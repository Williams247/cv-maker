export const fetchTemplateText = async (url, setter, error) => {
    try {
        const templateString = await (await fetch(url)).text();
        setter(templateString);
    } catch (e) {
        error(e.message)
    }
}