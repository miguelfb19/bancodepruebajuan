import React from "react";

interface Props {
  text: string;
  className?: string;
  action?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "btn-1" | "btn-2" | "btn-3";
  link?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  icon?: React.ElementType;
  iconClass?: string;
  id?: string;
}

export const CustomButton = ({
  className,
  action,
  text = "Aceptar",
  type = "button",
  variant = "btn-1",
  link = false,
  href = "#",
  target = "_blank",
  icon,
  iconClass,
  id,
}: Props) => {

  return link ? (
    <a id={id} href={href} className={`${variant} ${className} text-center flex gap-3 items-center justify-center`} target={target} rel="noopener noreferrer">
      {text}
      {icon ? React.createElement(icon, { className: iconClass }) : null}
    </a>
  ) : (
    <button id={id} type={type} className={`${variant} ${className} flex gap-3 items-center justify-center`} onClick={action}>
      {text}
      {icon ? React.createElement(icon, { className: iconClass }) : null}
    </button>
  );
};
