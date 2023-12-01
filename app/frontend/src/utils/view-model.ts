export const EVENT_UPDATE_STATE = "view_event_update_state"
export type EventSetting = {
    selector: string,
    eventName: string,
    callback: EventListenerOrEventListenerObject,
}

export class ViewModel<T> {
    private elem: HTMLElement
    private state: T
    private emitter = new EventTarget()

    constructor(
        elem: HTMLElement,
        initialState: T,
    ) {
        this.elem = elem
        this.state = initialState
        this.getEventSettings().forEach((e: EventSetting) => {
            this.select(e.selector)?.addEventListener(e.eventName, e.callback)
        })
        this.render()
    }

    public getState(): T {
        return this.state
    }

    public setState(state: T, options: {
        render: boolean,
        emit: boolean,
    } = {
            render: true,
            emit: true
        }) {
        this.state = state
        if (options.render) {
            this.render()
        }
        if (options.emit) {
            this.emit(EVENT_UPDATE_STATE)
        }
    }

    public on(eventName: string, callback: EventListenerOrEventListenerObject): void {
        this.emitter.addEventListener(eventName, callback)
    }

    protected select(selector: string): HTMLElement | null {
        return this.elem.querySelector(selector)
    }

    protected emit(eventName: string): void {
        this.emitter.dispatchEvent(new CustomEvent(eventName))
    }

    protected getEventSettings(): EventSetting[] {
        return []
    }
    protected render(): void { }
}