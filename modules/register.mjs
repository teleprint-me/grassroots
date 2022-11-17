class Register {
    constructor() {
        this.register = register;
    }

    static get hasTemplateSupport() {
        return 'content' in document.createElement('template');
    }

    static get hasShadowSupport() {
        return 'attachShadow' in document.createElement('div');
    }

    components(...descriptors) {
        for (let descriptor of descriptors) {
            customElements.define(
                descriptor.name,
                descriptor.constructor,
                descriptor.options
            );
        }
    }
}

let register = new Register();

export { register };
