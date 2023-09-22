import { RecentSuccessContainer } from './recent-success.styles'

import RecentSuccessItem from '../recent-success-item/recent-success-item.component'

import { useSelector } from "react-redux"
import { selectAnalytics, selectAnalyticsFilter } from '../../../redux/analytics/analytics.selector'

const RecentSuccess = () => {
    const analytics = useSelector(selectAnalytics)
    const filter = useSelector(selectAnalyticsFilter)

    const { Checkouts } = analytics

    const chekoutsFilter = Checkouts.filter(function (element) {
        switch (filter) {
            case "year":
                return new Date(element.date * 1000).getFullYear() === new Date().getFullYear()
            case "month":
                return new Date(element.date * 1000).getMonth() === new Date().getMonth() && new Date(element.date * 1000).getFullYear() === new Date().getFullYear()
            case "today":
                return new Date(element.date * 1000).getDate() === new Date().getDate() && new Date(element.date * 1000).getMonth() === new Date().getMonth() && new Date(element.date * 1000).getFullYear() === new Date().getFullYear()
            default:
                return element.date 
        }
    })

    return (
        <RecentSuccessContainer>
            {Checkouts &&
                chekoutsFilter.map((element, index) =>
                    <RecentSuccessItem key={index} product={element} />
                )
            }
        </RecentSuccessContainer>
    )
}

export default RecentSuccess