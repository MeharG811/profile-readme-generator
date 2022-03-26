import { forwardRef, InputHTMLAttributes } from 'react';

import * as S from './styles';

type SimpleInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const SimpleInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SimpleInputProps
> = ({ label, className, ...rest }: SimpleInputProps, ref) => {
  return (
    <S.Container className={className}>
      {label && <S.Label>{label}</S.Label>}
      <S.Input ref={ref} {...rest} />
    </S.Container>
  );
};

const FowardSimpleInput = forwardRef(SimpleInput);
export { FowardSimpleInput as SimpleInput };