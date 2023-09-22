import { StatsItemContainer, IconContainer, P } from "./stats-item.styles"

const StatsItem = ({Icon, value})=>{
    return(
        <StatsItemContainer>
            <IconContainer> <Icon/></IconContainer>
            <P>{value}</P>
            {/* <P>{value.replace(/[^\d.-]/g, '')}</P> */}
        </StatsItemContainer>
    )
}

export default StatsItem