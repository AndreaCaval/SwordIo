import {
  BaseButton,
  CloseButton,
  ButtonSpinner
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  close: 'close'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.close]: CloseButton
}[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton disabled={isLoading} {...otherProps}>
    {isLoading ? <ButtonSpinner /> : children}
  </CustomButton>;
};

export default Button;
