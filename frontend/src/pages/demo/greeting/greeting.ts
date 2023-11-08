import BaseComponent from "../../../common/modules/base-component";

export default class Greeting extends BaseComponent {
    onClick(fn: Function) {
        this.getElement()?.addEventListener('click', () => {
            fn()
        })
    }
}