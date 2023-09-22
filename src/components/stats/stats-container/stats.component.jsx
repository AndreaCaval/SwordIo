import { StatsContainer } from "./stats.styles"
import StatsItem from "../stats-item.component.jsx/stats-item.component"

import { FaShoppingCart, FaEuroSign } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'

import { useSelector } from "react-redux"
import { selectAnalytics } from '../../../redux/analytics/analytics.selector'

const Stats = () => {
    const analytics = useSelector(selectAnalytics)

    const { Carts, Checkouts, Declines, Total } = analytics

    return (
        <StatsContainer>
            <StatsItem Icon={FaShoppingCart} value={`Carts: ${Carts}`} />
            <StatsItem Icon={MdCancel} value={`Declines: ${Declines}`} />
            <StatsItem Icon={TiTick} value={`Checkouts: ${Checkouts.length}`} />
            <StatsItem Icon={FaEuroSign} value={`Total: ${Total}`} />
            {/* p = parseFloat(element.price_product.replaceAll(',', '.').replace(/[^\d.-]/g, '')) */}
        </StatsContainer>
    )
}

export default Stats