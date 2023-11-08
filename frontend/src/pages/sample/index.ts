import './index.scss'

import { AxiosResponse, AxiosError } from "axios";
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
        AjaxUtil.getAxiosInstance().get('/demo/sample/items').then((res: AxiosResponse<any>) => {
            const { data, status } = res
            if (status === 200) {
                console.log(data)
            }
        }).catch((e: AxiosError<any>) => {
            console.log(e.message);
        })
    })
}

document.addEventListener('DOMContentLoaded', index)