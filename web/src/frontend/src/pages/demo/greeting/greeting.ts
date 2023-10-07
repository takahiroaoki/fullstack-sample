import BaseComponent from "../../../common/components/base-component/base-component";

export default class Greeting extends BaseComponent {
    onClick(fn: Function) {
        this.getElement()?.addEventListener('click', () => {
            fn()
        })
    }
}