import { ReactNode } from "react";
import "./ButtonPrimary.scss";

interface Props{
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    children: ReactNode
}

const Button = ({
    onClick,
    children
}: Props) => {
    return (
        <button onClick={onClick} className="gc-button gc-button-primary">{children}</button>
    );
};

export default Button;
