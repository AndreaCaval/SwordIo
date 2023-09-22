import { SwitchInput, SwitchLabel, SwitchSpan } from './switch.styles';

const Switch = ({ id, isOn, handleToggle, onColor }) => {
    return (
        <>
            <SwitchInput
                id={id}
                checked={isOn}
                onChange={handleToggle}
                type="checkbox"
            />
            <SwitchLabel
                style={{ background: isOn && onColor }}
                htmlFor={id}>
                <SwitchSpan />
            </SwitchLabel>
        </>
    )
}

export default Switch;
