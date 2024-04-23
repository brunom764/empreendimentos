/* eslint-disable @next/next/no-img-element */
import { BoxReturn, HeaderContainerAll, BoxAdd } from "./styleHeader";

interface HeaderProps {
  title: string;
  button: Boolean;
  IconReturn: Boolean;
  PushButton: () => void;
  PushButtonReturn: () => void;
}

export default function Header({
  title,
  button,
  IconReturn,
  PushButton,
  PushButtonReturn,
}: HeaderProps) {
  return (
    <HeaderContainerAll>
      {IconReturn && (
        <BoxReturn>
          <img
            onClick={PushButtonReturn}
            src="/images/Return.svg"
            alt="Icone Retornar"
          />
        </BoxReturn>
      )}
      <BoxAdd return={false}>
        <h5>{title}</h5>
        {button && (
          <button onClick={PushButton}>
            <p>
              Adicionar<span> +</span>
            </p>
          </button>
        )}
      </BoxAdd>
    </HeaderContainerAll>
  );
}
