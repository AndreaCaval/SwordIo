import { FormSelectLabel, SelectI, Group } from './form-select.styles';

const FormSelect = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormSelectLabel>
        {label}
      </FormSelectLabel>
      <SelectI {...otherProps} />
    </Group>
  );
};

export default FormSelect;
