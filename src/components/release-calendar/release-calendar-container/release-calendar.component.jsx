import ReleaseCalendarItem from '../release-calendar-item/release-calendar-item.component';

import { useSelector } from 'react-redux';
import { selectProductsCalendar } from '../../../redux/productscalendar/productscalendar.selector'

const ReleaseCalendar = () => {

    const products = useSelector(selectProductsCalendar)

    return (
        <div>
            {products &&
                products.map((element, index) =>
                    <ReleaseCalendarItem key={index} product={element} />
                )
            }
        </div>
    )
}

export default ReleaseCalendar