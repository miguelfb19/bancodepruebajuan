interface Props {
  text: string;
  className?: string;
  action?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "btn-1" | "btn-2"
}

export const CustomButton = ({
  className,
  action,
  text = "Aceptar",
  type = "button",
  variant = "btn-1"
}: Props) => {
  return (
    <button type={type} className={`${variant} ${className}`} onClick={action}>
      {text}
    </button>
  );
};
