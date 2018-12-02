import React from 'react';
export default class Highlighter extends React.Component {
    highlightInstances = (word, htmlString) => {
        const regExWord = new RegExp(word, "gi")
        return htmlString.replace(regExWord, `<mark class="flagged">[redacted]</mark>`)
    }

    highlightBadWords = () => {
        const slurs = process.env.REACT_APP_SLURS
        const slurs_array = slurs.split("-")
        let htmlString = this.props.html
        slurs_array.forEach(word => {
            word = word.toLowerCase();
            htmlString = this.highlightInstances(word, htmlString)
        });
        return htmlString;
    }

    render = () => {
        return <div dangerouslySetInnerHTML={{ __html: this.highlightBadWords() }} ></div>
    }
}