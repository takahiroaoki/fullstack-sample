import './index.scss'

import Greeting from './greeting/greeting'

(function Index() {
    // Mount components
    const greeting: Greeting = new Greeting('greeting')

    // Setting for components
    greeting.onClick(() => {
        alert('clicked!!')
    })

    // Sub methods for use in this function
})()