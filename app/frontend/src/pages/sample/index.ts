import './index.scss'
import { EVENT_SAMPLE_CLICK, Greeting } from './greeting/greeting'
import { AjaxUtil } from '@src/utils/ajax-util'

const index = () => {
    // Mount components
    const greeting: Greeting = new Greeting(
        document.querySelector('[data-ref=greeting]')!,
        {
            bold: false,
            sampleInput: '',
        },
    )

    // Setting for components
    greeting.on(EVENT_SAMPLE_CLICK, () => {
        AjaxUtil
            .getData('/demo/sample/items')
            .then((data) => {
                console.log(data)
            })
    })
}

document.addEventListener('DOMContentLoaded', index)