import { INPUT_UPDATE } from "../context/Types";

export const handleFormChange = dispatch => (e, noNest = false) => {
    let payload = {};
    if (noNest) {
        payload = {
            target: e.name,
            value: e.value,
        }
    } else {
        const [form, name] = e.target.id.split("_");
        payload = {
            target: form,
            nest: name,
            value: e.target.value,
        }
    }

    dispatch({
        type: INPUT_UPDATE,
        payload
    })
}

export const parseMarkUpListToArray = (markup) => {
    if (!markup || !markup.trim().length) return [];

    const arrOfList = markup.split("<li>").filter((a, i) => i > 0);
    return arrOfList.map(list => list.split("</li>")[0])
};

export const parseArrayToListMarkup = (array) => {
    if (!array || !array.length) return "";

    return `<ul>
        ${array.map(item => `<li>${item}</li>`).join("\n")}
    </ul>`
}