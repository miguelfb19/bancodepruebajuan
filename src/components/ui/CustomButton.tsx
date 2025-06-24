interface Props {
  text: string;
  className?: string;
  action?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "btn-1" | "btn-2" | "btn-3";
  link?: boolean;
  href?: string;
}

export const CustomButton = ({
  className,
  action,
  text = "Aceptar",
  type = "button",
  variant = "btn-1",
  link = false,
  href = "#",
}: Props) => {
  return link ? (
    <a href={href} className={`${variant} ${className} text-center`} target="_blank">
      {text}
    </a>
  ) : (
    <button type={type} className={`${variant} ${className}`} onClick={action}>
      {text}
    </button>
  );
};
