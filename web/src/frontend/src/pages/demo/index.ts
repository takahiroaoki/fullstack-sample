import './index.scss'

import Greeting from './greeting/greeting'

function Index() {
    const greeting: Greeting = new Greeting('greeting')
    greeting.onClick(() => {
        alert('clicked!!')
    })
}

Index()