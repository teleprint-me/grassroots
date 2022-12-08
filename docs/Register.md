# Register
## Description
Define custom elements
## Return
A new register instance

# Register.hasTemplateSupport
## Type
`static` property
## Return
`true` if `document` supports `HTMLTemplateElement.content` else `false`

# Register.hasShadowSupport
## Type
`static` property
## Return
`true` if `document` supports `Element.attachShadow` else `false` 

# Register.components
## Type
method
## Params
`...descriptors` where `descriptor` is type `object` and defines `descriptor.name`, `descriptor.constructor`, `descriptor.options`
### descriptor.name
String specifying the `name` for the new custom element
### descriptor.constructor
Constructor for the new custom element
### descriptor.options (optional)
Object that controls how the element is defined
## Returns
`undefined`

# Register.application

## Type 
method

## Params
`resolve, reject` where `resolve` executes if the document supports custom elements else `reject` executes

### resolve
custom callback for resolving components
### reject
custom callback for rejecting components

## Returns
`undefined`

# Example

```javascript
const register = new Register();
const descriptors = [
    { 'name': 'app-container', 'constructor': AppContainer },
    { 'name': 'app-wrapper', 'constructor': AppWrapper },
    { 'name': 'app-router', 'constructor': AppRouter }
];
register.components(...descriptors);
```
