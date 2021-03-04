import { useState, useEffect } from "react"
import { fetchTemplateText } from "./../utils/fetcher";
import { compileToParsableHTML } from "./../utils/template";
import Parser from "react-html-parser";
import AppContext from "../context/App";
import { useContextSelector } from 'use-context-selector';

const RenderTemplate = () => {
    const appState = useContextSelector(AppContext, ctx => ctx.appState);

    const [template, setTemplate] = useState("");

    useEffect(() => {
        fetchTemplateText("/templates/second.hbs", setTemplate, (message) => console.log(message));
    }, [setTemplate]);

    return (
        <div id="template-box">
            { Parser(compileToParsableHTML(template, appState))}
        </div>
    )
};

export default RenderTemplate;