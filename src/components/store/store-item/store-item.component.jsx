import { StoreItemContainer, StoreItemContainerActive, TitleSwitchContainer, Text, TextSpan, IconLink, TextValue } from "./store-item.styles";
import { FiSettings } from "react-icons/fi";
import Switch from "../../switch/switch.component";

import { useSelector, useDispatch } from "react-redux"
import { setStoreDataSetting } from "../../../redux/storesdata/storesdata.action";
import { selectStoresDataMap } from '../../../redux/storesdata/storesdata.selector'

const StoreCard = ({ title }) => {
    const dispatch = useDispatch();

    const storesDataMap = useSelector(selectStoresDataMap)

    const Container = storesDataMap[title].aco ? StoreItemContainerActive : StoreItemContainer

    const handleToggle = () => {
        dispatch(setStoreDataSetting(storesDataMap, title, "aco", !storesDataMap[title].aco))
    }

    return (
        <Container>
            <TitleSwitchContainer>
                <h3>{title}</h3>
                <Switch
                    id={`${title}-switch`}
                    isOn={storesDataMap[title].aco}
                    onColor="var(--main-color)"
                    handleToggle={handleToggle}
                />
            </TitleSwitchContainer>
            {
                "account_email" in storesDataMap[title] ?
                    <TextValue id={`${title}-account`}>
                        <TextSpan >Account: </TextSpan>
                        <span title={storesDataMap[title].account_email}> {storesDataMap[title].account_email instanceof String ? storesDataMap[title].account_email : storesDataMap[title].account_email.value}</span>
                    </TextValue>
                    :
                    <Text id={`${title}-account`}><TextSpan >Account: </TextSpan>null</Text>
            }
            {
                "profile" in storesDataMap[title] ?
                    <Text id={`${title}-profile`}><TextSpan >Profile: </TextSpan>{storesDataMap[title].profile instanceof String ? storesDataMap[title].profile : storesDataMap[title].profile.value}</Text>
                    :
                    <Text id={`${title}-profile`}><TextSpan >Profile: </TextSpan>null</Text>
            }

            <IconLink to={`${title}`}>
                <FiSettings />
            </IconLink>
        </Container>
    )
};

export default StoreCard;
