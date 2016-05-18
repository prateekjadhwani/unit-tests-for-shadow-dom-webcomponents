class SomeThing extends HTMLElement {
    attachedCallback () {
        this.el = this.createShadowRoot();
        this.render();
    }
    
    render () {
        this.el.innerHTML = '<h1>Hello</h1>';
    }
}

export default SomeThing;