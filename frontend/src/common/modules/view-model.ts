// replace this with base-component


const EVENT_UPDATE_STATE = 'event_update_state'

export type InternalEvent = {
    event: string,
    selector: string,
    callback: Function,
}

export type ViewModelEvent = typeof EVENT_UPDATE_STATE

export class ViewModel<T> {
    private elem: HTMLElement
    private state: T

    constructor(
        elem: HTMLElement,
        initialState: T,
    ) {
        this.elem = elem
        this.initInternalEvents()
        this.state = initialState
        this.render()
    }

    private initInternalEvents(): void {
        this.getInternalEvents().forEach((v) => {
            this.getElementOf(v.selector).addEventListener(v.event, (e) => {
                v.callback(e)
            })
        })
    }

    protected getInternalEvents(): InternalEvent[] {
        return []
    }


    protected emit(event: ViewModelEvent): void {
        this.elem.dispatchEvent(new CustomEvent(event))
    }

    protected render(): void {
        // rendering
    }

    public getElementOf(selector: string): HTMLElement {
        return this.elem.querySelector(selector) as HTMLElement
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

    public getState(): T {
        return this.state
    }
}