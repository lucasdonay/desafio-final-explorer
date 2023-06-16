import { ButtonSC } from './style';

export function Button({ type, title, disabled, ...rest }) {
  return (
    <ButtonSC type={type} disabled={disabled} {...rest}>
      {disabled ? 'Carregando...' : title}
    </ButtonSC>
  );
}
