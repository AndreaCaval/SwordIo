import { StoreSettingContainer, SettingsContainer } from './store-setting.styles'
import { useParams } from 'react-router-dom'

import Switch from '../../components/switch/switch.component';
import FormInput from '../../components/form-input/form-input.component';
import FormSelect from '../../components/form-select/form-select.component';

import { useSelector, useDispatch } from "react-redux"
import { setStoreDataSetting } from "../../redux/storesdata/storesdata.action";
import { selectStoresDataMap } from '../../redux/storesdata/storesdata.selector'
import { selectStoresSettingMap } from '../../redux/storeslist/storeslist.selector'
import { selectProfiles } from '../../redux/profiles/profile.selector';

const StoreSetting = () => {
    const dispatch = useDispatch()
    const profiles = useSelector(selectProfiles);
    const { storesetting } = useParams();
    const storesDataMap = useSelector(selectStoresDataMap)
    const storesSettingMap = useSelector(selectStoresSettingMap)


    const createOption = (list) => {

        let x = []

        list.forEach(element => {
            x.push({ value: element, label: element })
        });

        return x
    }

    const createOptionCustom = (name) => {
        let x = []
        if (name.includes("profile"))
            Object.keys(profiles).forEach((key) => {
                x.push({ value: key, label: key })
            })

        if (name.includes("account"))
            x.push({ value: "none", label: "none" })
        return x
    }

    const handleChangeInput = (event, setting) => {
        const { value } = event.target;
        dispatch(setStoreDataSetting(storesDataMap, storesetting, setting, value))
    };

    const handleChangeSelect = (value, action, setting) => {
        dispatch(setStoreDataSetting(storesDataMap, storesetting, setting, value));
    }

    return (
        <StoreSettingContainer>
            <h1>{storesetting}</h1>

            <SettingsContainer>
                {

                    Object.keys(storesSettingMap[storesetting]).map(setting =>

                        storesSettingMap[storesetting][setting] === "boolean" ?
                            (
                                <div className='label' key={setting}>
                                    <label htmlFor="">{setting}</label>
                                    <Switch
                                        key={setting}
                                        id={`${setting}-switch`}
                                        isOn={storesDataMap[storesetting][setting]}
                                        onColor="var(--main-color)"
                                        handleToggle={() => dispatch(setStoreDataSetting(storesDataMap, storesetting, setting, !storesDataMap[storesetting][setting]))}
                                    />
                                </div>
                            )
                            : storesSettingMap[storesetting][setting] === "string" ?
                                (
                                    <FormInput
                                        key={setting}
                                        label={setting}
                                        type='text'
                                        onChange={(e) => handleChangeInput(e, setting)}
                                        name={setting}
                                        value={storesDataMap[storesetting][setting]}
                                    />

                                ) : storesSettingMap[storesetting][setting] === "number" ?
                                    (
                                        <FormInput
                                            key={setting}
                                            label={setting}
                                            type='number'
                                            step="100"
                                            onChange={(e) => handleChangeInput(e, setting)}
                                            name={setting}
                                            value={storesDataMap[storesetting][setting]}
                                        />
                                    ) : Array.isArray(storesSettingMap[storesetting][setting]) ?
                                        (
                                            <FormSelect
                                                key={setting}
                                                id={setting}
                                                name={setting}
                                                label={setting}
                                                options={createOption(storesSettingMap[storesetting][setting])}
                                                value={storesDataMap[storesetting][setting]}
                                                onChange={(v, a) => handleChangeSelect(v, a, setting)}
                                            />
                                        ) : storesSettingMap[storesetting][setting] === "select" ?
                                            (
                                                <FormSelect
                                                    key={setting}
                                                    id={setting}
                                                    name={setting}
                                                    label={setting}
                                                    options={createOptionCustom(setting)}
                                                    value={storesDataMap[storesetting][setting]}
                                                    onChange={(v, a) => handleChangeSelect(v, a, setting)}
                                                />
                                            ) : <></>

                    )
                }
            </SettingsContainer>
        </StoreSettingContainer>
    )
}

export default StoreSetting