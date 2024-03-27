import { EventSetting, ViewModel } from "../../../utils/view-model"
import yup from "../../../utils/yup.custom"
import { globalSchema } from "../../../utils/schema"

const schema = globalSchema.pick(['sampleInput'])

type State = yup.InferType<typeof schema> & {
    bold: boolean
}

export class Greeting extends ViewModel<State> {
    protected getEventSettings(): EventSetting[] {
        return [
            {
                selector: '.greeting__message',
                eventName: 'click',
                callback: () => {
                    window.alert('clicked!')
                    this.setState({
                        bold: !this.getState().bold
                    })
                    this.emit('custom_sample_click')
                }
            },
        ]
    }

    protected render(): void {
        this.select('.greeting__message')?.classList.toggle('greeting__message--bold', this.getState().bold)
    }
}