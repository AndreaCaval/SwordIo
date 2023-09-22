import { ReleaseCalendarItemPreviewContainer, ProductLink, Img, ItemDescription, ItemData, Span, P } from './release-calendar-item-preview.styles'


const ReleaseCalendarItemPreview = ({ product, isOpen, onRequestClose }) => {
    return (
        <>
            <ReleaseCalendarItemPreviewContainer
                ariaHideApp={false}
                isOpen={isOpen}
                onRequestClose={onRequestClose}
            >
                <h3>{product.site}</h3>
                <ItemData>
                    <Img src={product.item_img} />
                    <ItemDescription>
                        <P> <Span> Id: </Span> {product.item_id}</P>
                        <P> <Span> Name: </Span> {product.item_name}</P>
                        <P> <Span> Color: </Span> {product.item_color}</P>
                        <P> <Span> Category: </Span> {product.item_category}</P>
                        <P> <Span> Price: </Span> {product.item_price}</P>
                        <P> <Span> Drop Date: </Span>{product.drop_date}</P>
                        <P> <Span> Links: </Span>
                            {product.item_links &&

                                typeof product.item_links === "string"
                                ?
                                <ProductLink href={product.item_links} target="_blank">link</ProductLink>
                                :
                                Object.keys(product.item_links).map((key, index) =>
                                    <ProductLink key={index} href={product.item_links[key] + product.item_id} target="_blank">{key} </ProductLink>
                                )
                            }
                        </P>
                    </ItemDescription>
                </ItemData>
            </ReleaseCalendarItemPreviewContainer>
        </>
    );
}

export default ReleaseCalendarItemPreview

