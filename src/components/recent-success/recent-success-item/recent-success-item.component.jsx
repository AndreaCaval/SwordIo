import {RecentSuccessItemContianer, Img, RecentSuccessItemName, RecentSuccessItemOrder, RecentSuccessItemBase } from './recent-success-item.styles'

const RecentSuccessItem = ({ product }) => {

    const created = new Date(product.date * 1000)
    const date = created.getDate() + '/' + (created.getMonth() + 1)+ '/' + created.getFullYear()

    return (
        <RecentSuccessItemContianer>           
            <><Img src={product.img_product} alt="" /></>
            <RecentSuccessItemName title={product.name_product}>{product.name_product}</RecentSuccessItemName>
            <RecentSuccessItemBase>{product.site}</RecentSuccessItemBase>
            <RecentSuccessItemBase>{product.size_product}</RecentSuccessItemBase>
            <RecentSuccessItemBase>{product.price_product}</RecentSuccessItemBase>
            <RecentSuccessItemOrder title={product.order_id}>{product.order_id}</RecentSuccessItemOrder>
            <span>{date}</span>

        </RecentSuccessItemContianer>
    )
}

export default RecentSuccessItem