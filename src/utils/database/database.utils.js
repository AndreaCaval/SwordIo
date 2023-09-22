import PRODUCTSCALENDAR from '../../data/release-calendar.json'
import ANALYTICS from '../../data/analytics.json'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getProductsCalendar = async() => {
    await sleep(1000)
    // const res = await fetch('http://localhost:4000/release-calendar', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // if (res.status === 200) {
    //     const release_calendar = await res.json()
    //     return release_calendar
    // } else {
    //     throw new Error('License not found')
    // }
    return PRODUCTSCALENDAR
}

export const getAnalytics = async() => {
    await sleep(1000)
    // const res = await fetch('http://localhost:4000/analytics', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // if (res.status === 200) {
    //     const analytics = await res.json()
    //     return analytics
    // } else {
    //     throw new Error('License not found')
    // }
    return ANALYTICS
}