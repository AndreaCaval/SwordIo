import { Country, State, City } from 'country-state-city';

import FormInput from '../../form-input/form-input.component'
import FormSelect from '../../form-select/form-select.component'

const AddressInfo = ({ formFieldsInput, setFormFieldsInput, formFieldsSelect, setFormFieldsSelect }) => {
    const { ProfileName, FirstName, LastName, Email, Telephone, AddressOne, AddressTwo, Zip } = formFieldsInput;
    const { prefix, country, state, city } = formFieldsSelect;

    const countries = Country.getAllCountries()
    const updatedCountries = countries.map((c) => ({
        label: c.name,
        value: c.isoCode,
        ...c
    }));
    const updatedPrefix = countries.map((c) => ({
        label: c.phonecode.includes('+') ? c.phonecode : '+' + c.phonecode,
        value: c.isoCode,
        ...c
    }));
    const updatedStates = (countryId) =>
        State.getStatesOfCountry(countryId).map((state) =>
            ({ label: state.name, value: state.isoCode, ...state })
        );
    const updatedCities = (stateId) =>
        City.getCitiesOfState(country.isoCode, stateId).map((city) =>
            ({ label: city.name, value: city.stateCode, ...city })
        );


    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormFieldsInput({ ...formFieldsInput, [name]: value });
    };
    const handleChangeSelect = (value, action) => {
        const { name } = action;
        setFormFieldsSelect({ ...formFieldsSelect, [name]: value });
    }


    return (
        <>
            <FormInput
                label='ProfileName'
                type='text'
                required
                onChange={handleChangeInput}
                name='ProfileName'
                value={ProfileName}
            />
            <FormInput
                label='Email'
                type='email'
                onChange={handleChangeInput}
                name='Email'
                value={Email}
            />
            <FormInput
                label='FirstName'
                type='text'
                onChange={handleChangeInput}
                name='FirstName'
                value={FirstName}
            />
            <FormInput
                label='LastName'
                type='text'
                onChange={handleChangeInput}
                name='LastName'
                value={LastName}
            />
            <FormSelect
                id="prefix"
                name="prefix"
                label="Prefix"
                options={updatedPrefix}
                value={prefix}
                onChange={handleChangeSelect}
            />
            <FormInput
                label='Telephone'
                type='number'
                onChange={handleChangeInput}
                name='Telephone'
                value={Telephone}
            />
            <FormSelect
                id="country"
                name="country"
                label="Country"
                options={updatedCountries}
                value={country}
                onChange={handleChangeSelect}
            />
            <FormSelect
                id="state"
                name="state"
                label="State"
                options={updatedStates(country ? country.isoCode : null)}
                value={state}
                onChange={handleChangeSelect}
            />
            <FormSelect
                id="city"
                name="city"
                label="City"
                options={updatedCities(state ? state.isoCode : null)}
                value={city}
                onChange={handleChangeSelect}
            />
            <FormInput
                label='Zip'
                type='text'
                onChange={handleChangeInput}
                name='Zip'
                value={Zip}
            />
            <FormInput
                label='AddressOne'
                type='text'
                onChange={handleChangeInput}
                name='AddressOne'
                value={AddressOne}
            />
            <FormInput
                label='AddressTwo'
                type='text'
                onChange={handleChangeInput}
                name='AddressTwo'
                value={AddressTwo}
            />
        </>
    )
}

export default AddressInfo