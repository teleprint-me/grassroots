const getStyleSheet = function (title) {
    for (const styleSheet of document.styleSheets) {
        if (title === styleSheet.title) {
            return styleSheet;
        }
    }
};

const getStyleSheetAsText = function (...styleSheets) {
    return [...styleSheets]
        .map((styleSheet) => {
            try {
                return [...styleSheet.cssRules]
                    .map((rule) => rule.cssText)
                    .join('');
            } catch (e) {
                console.log(
                    'Access to stylesheet %s is denied. Ignoring…',
                    styleSheet.href
                );
            }
        })
        .filter(Boolean)
        .join('\n');
};

export class Styler {
    constructor() {
        this.styleSheet = new CSSStyleSheet();
    }

    setCSSStyleSheet(...titles) {
        let styleSheetText = null;
        let styleSheets = [];

        for (const title of titles) {
            const styleSheet = getStyleSheet(title);
            styleSheets.push(styleSheet);
        }

        styleSheetText = getStyleSheetAsText(...styleSheets);
        this.styleSheet.replaceSync(styleSheetText);
    }

    setAdoptedStyleSheet(shadow, ...cssStyleSheetTitles) {
        this.setCSSStyleSheet(...cssStyleSheetTitles);
        shadow.adoptedStyleSheets = [this.styleSheet];
    }
}
