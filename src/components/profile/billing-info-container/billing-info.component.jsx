import Cards from 'react-credit-cards';
import { CardContainer, CardInputContainer } from './billing-info.styles'
import FormInput from '../../form-input/form-input.component';

const BillingInfo = ({ formFieldsSelectCreditCard, setFormFieldsSelectCreditCard }) => {

    const { name, expiry, cvc, focus, number  } = formFieldsSelectCreditCard;

    const handleFocus = (e) => {
        setFormFieldsSelectCreditCard({ ...formFieldsSelectCreditCard, ["focus"]: e.target.name });
    }
    const handleChangeCreditCard = (e) => {
        const { name, value } = e.target;
        setFormFieldsSelectCreditCard({ ...formFieldsSelectCreditCard, [name]: value });
    }
    const handleChangeCreditCardExp = (e) => {
        const { name, value } = e.target;
        let textTemp = value;
        if (textTemp[0] !== '1' && textTemp[0] !== '0') {
            textTemp = '';
        }
        if (textTemp.length === 2) {
            if (parseInt(textTemp.substring(0, 2)) > 12 || parseInt(textTemp.substring(0, 2)) === 0) {
                textTemp = textTemp[0];
            } else if (value.length === 2) {
                textTemp += '/';
            } else {
                textTemp = textTemp[0];
            }
        }
        textTemp = textTemp.substring(0, 5)
        setFormFieldsSelectCreditCard({ ...formFieldsSelectCreditCard, [name]: textTemp });
    }

    return (
        <>
            <CardContainer>
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                />
            </CardContainer>
            <CardInputContainer>
                <FormInput
                    type="text"
                    name="name"
                    label="CardOwnerName"
                    value={name}
                    onChange={handleChangeCreditCard}
                    onFocus={handleFocus}
                />
                <FormInput
                    type="tel"
                    name="number"
                    label="Card Number"
                    inputmode="numeric"
                    value={number}
                    onChange={handleChangeCreditCard}
                    onFocus={handleFocus}
                />
                <FormInput
                    type="text"
                    name="expiry"
                    label="Expiry"
                    inputmode="numeric"
                    value={expiry}
                    onChange={handleChangeCreditCardExp}
                    onFocus={handleFocus}
                />
                <FormInput
                    type="tel"
                    name="cvc"
                    label="CVV"
                    maxlength="10"
                    inputmode="numeric"
                    value={cvc}
                    onChange={handleChangeCreditCard}
                    onFocus={handleFocus}
                />
            </CardInputContainer>
        </>
    )
}

export default BillingInfo