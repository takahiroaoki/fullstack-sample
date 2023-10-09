import './index.scss'

import { AxiosResponse, AxiosError } from "axios";
import Greeting from './greeting/greeting'
import AjaxUtil from '../../common/modules/ajax-util'

(function Index() {
    // Mount components
    const greeting: Greeting = new Greeting('greeting')

    // Setting for components
    greeting.onClick(() => {
        AjaxUtil.getAxiosInstance().get('http://localhost:8080/demo/items').then((res: AxiosResponse<any>) => {
            const { data, status } = res
            if (status === 200) {
                console.log(data)
            }
        }).catch((e: AxiosError<any>) => {
            console.log(e.message);
        })
    })

    // Sub methods for use in this function
})()