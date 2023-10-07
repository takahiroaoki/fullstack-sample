export default class BaseComponent {
    private __componentId: String
    private __element: HTMLElement | null

    constructor(componentId: String) {
        this.__componentId = componentId;
        this.__element = document.querySelector(`[componentId=${componentId}]`)
    }

    public getComponentId(): String {
        return this.__componentId
    }

    public getElement(): HTMLElement | null {
        return this.__element
    }
}