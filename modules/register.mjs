function hasTemplateSupport() {
    return 'content' in document.createElement('template');
}

function register(...components) {
    for (let component of components) {
        customElements.define(
            component.name,
            component.constructor,
            component.options
        );
    }
}

export { hasTemplateSupport, register };
