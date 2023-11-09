import './index.scss'
import { Greeting } from './greeting/greeting'
import { AjaxUtil } from '../../common/modules/ajax-util'

const index = () => {
    // Mount components
    const greeting: Greeting = new Greeting(
        document.querySelector('[data-ref=greeting]')!,
        {},
    )

    // Setting for components
    greeting.on('custom_sample_click', () => {
        AjaxUtil
            .getData('/demo/sample/items')
            .then((data) => {
                console.log(data)
            })
    })
}

document.addEventListener('DOMContentLoaded', index)