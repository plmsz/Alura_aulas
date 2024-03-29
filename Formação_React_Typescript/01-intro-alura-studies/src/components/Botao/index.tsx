import * as React from 'react';
import style from './Botao.module.scss';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}
export function Botao({ type = 'button', onClick, children }: Props) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
