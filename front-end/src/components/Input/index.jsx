import { InputSC } from './style';

export function Input({ label, ...rest }) {
  return (
    <InputSC>
      <label>{label}</label>

      <input {...rest} />
    </InputSC>
  );
}
