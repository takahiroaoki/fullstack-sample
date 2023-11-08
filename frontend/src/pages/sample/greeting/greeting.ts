import { EventSetting, ViewModel } from "../../../common/modules/view-model"

type State = {}

export class Greeting extends ViewModel<State> {
    protected getEventSettings(): EventSetting[] {
        return [
            {
                selector: '.greeting__message',
                eventName: 'click',
                callback: () => {
                    window.alert('clicked!')
                    this.emit('custom_sample_click')
                }
            },
        ]
    }
}