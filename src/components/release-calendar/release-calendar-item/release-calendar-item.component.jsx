import { ReleaseCalendarItemContainer, MoreInfo, Text, Img, InfoContainer } from './release-calendar-item.styles'
import { useState } from 'react';
import ReleaseCalendarItemPreview from '../release-calendar-item-preview/release-calendar-item-preview.component';


const ReleaseCalendarItem = ({ product }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <ReleaseCalendarItemContainer onClick={openModal}>
                <Img src={product.item_img} alt="" />
                <InfoContainer>
                    <Text className='site'>{product.site}</Text>
                    <Text className='name'>{product.item_name }</Text>
                    <Text className="drop-date">{product.drop_date.includes(' ') ? product.drop_date.split(' ')[0] : product.drop_date.substring(0, 10) }</Text>
                </InfoContainer>
                <MoreInfo  />
            </ReleaseCalendarItemContainer>

            <ReleaseCalendarItemPreview
                product={product}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            />
        </>
    )
}

export default ReleaseCalendarItem