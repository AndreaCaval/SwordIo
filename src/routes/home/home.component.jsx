import { HomeContainer, LeftContainer, RightContainer, StatsContainer, AnalyticsContainer, UpdateInfoContainer, RecentSuccessContainer, ReleaseCalendarContainer, TitleContainer } from './home.styles'
import ReleaseCalendar from '../../components/release-calendar/release-calendar-container/release-calendar.component'
import Stats from '../../components/stats/stats-container/stats.component'
import RecentSuccess from '../../components/recent-success/recent-success-container/recent-success.component'
import UpdateInfo from '../../components/update-info/update-info-container/update-info.component'
import Analytics from '../../components/analitics/analytics-container/analytics.component'
import { FiRefreshCw } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setFilter } from '../../redux/analytics/analytics.action'
import { fetchProductsCalendarAsync } from '../../redux/productscalendar/productscalendar.action'
import { fetchAnalyticsAsync } from '../../redux/analytics/analytics.action'
import { selectAnalyticsFilter, selectAnalyticsIsLoading } from '../../redux/analytics/analytics.selector'
import { selectProductsCalendarIsLoading } from '../../redux/productscalendar/productscalendar.selector'

const Home = () => {

    const dispatch = useDispatch()
    const isAnalyticsLoading = useSelector(selectAnalyticsIsLoading)
    const isProductsCalendarLoading = useSelector(selectProductsCalendarIsLoading)
    const filter = useSelector(selectAnalyticsFilter)

    useEffect(() => {
        isAnalyticsLoading ? document.getElementById("refresh-analytics").classList.add("active") : document.getElementById("refresh-analytics").classList.remove("active")
        isProductsCalendarLoading ? document.getElementById("refresh-productscalendar").classList.add("active") : document.getElementById("refresh-productscalendar").classList.remove("active")
    }, [isAnalyticsLoading, isProductsCalendarLoading])


    const handleAnalyticsRefresh = () => {
        dispatch(fetchAnalyticsAsync())
    }

    const handleProductsCalendarRefresh = () => {
        dispatch(fetchProductsCalendarAsync())
    }

    const handleChangeFilter = (event) => {
        dispatch(setFilter(event.target.value))
    }


    return (
        <div className='outlet-container'>
            <h1 className='title'>Home</h1>
            <HomeContainer className='HomeContainer'>
                <LeftContainer className="LeftContainer">
                    <div className='title-commands'>
                        <TitleContainer>Stats</TitleContainer>
                        <FiRefreshCw onClick={handleAnalyticsRefresh} id="refresh-analytics" />
                    </div>
                    <StatsContainer className="Stats">
                        <Stats />
                    </StatsContainer>

                    <div className='title-commands'>
                        <TitleContainer>Analytics</TitleContainer>
                    </div>
                    <AnalyticsContainer className="Analytics">
                        <Analytics />
                    </AnalyticsContainer>

                    <div className='title-commands'>
                        <TitleContainer>Recent Checkout</TitleContainer>
                        <div className='rdbtns'>
                            <div>
                                <input
                                    type="radio"
                                    name="filter"
                                    id="today"
                                    value="today"
                                    checked={filter === "today"}
                                    onChange={handleChangeFilter}
                                />
                                <label htmlFor="today">Today</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="filter"
                                    id="month"
                                    value="month"
                                    checked={filter === "month"}
                                    onChange={handleChangeFilter}
                                />
                                <label htmlFor="month">Month</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="filter"
                                    id="year"
                                    value="year"
                                    checked={filter === "year"}
                                    onChange={handleChangeFilter}
                                />
                                <label htmlFor="year">Year</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="filter"
                                    id="all"
                                    value="all"
                                    checked={filter === "all"}
                                    onChange={handleChangeFilter}
                                />
                                <label htmlFor="all">All</label>
                            </div>
                        </div>
                    </div>
                    <RecentSuccessContainer className="RecentSuccess">
                        <RecentSuccess />
                    </RecentSuccessContainer>
                </LeftContainer>
                <RightContainer className="RightContainer">
                    <div className='title-commands'>
                        <TitleContainer>Update Info</TitleContainer>
                    </div>
                    <UpdateInfoContainer className="UpdateInfo">
                        <UpdateInfo />
                    </UpdateInfoContainer>

                    <div className='title-commands'>
                        <TitleContainer>Upcoming Release</TitleContainer>
                        <FiRefreshCw onClick={handleProductsCalendarRefresh} id="refresh-productscalendar" />
                    </div>
                    <ReleaseCalendarContainer className="ReleaseCalendar">
                        <ReleaseCalendar />
                    </ReleaseCalendarContainer>
                </RightContainer>
            </HomeContainer>
        </div>
    )
}

export default Home