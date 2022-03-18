import { ButtonProps } from "../../../types/ui/Button";
import "./Button.css";

const Button = ({ title, className, onClick }: ButtonProps) => {
  return (
    <div className={`container-button ${className}`} onClick={onClick}>
      <p className="lable-button">{title}</p>
    </div>
  );
};

export default Button;
