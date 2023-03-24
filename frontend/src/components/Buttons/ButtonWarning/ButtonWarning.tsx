import { ReactNode } from "react";
import "./ButtonWarning.scss";

interface Props{
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    children: ReactNode
}

const ButtonWarning = ({
    onClick,
    children
}: Props) => {
    return (
        <button onClick={onClick} className="gc-button gc-button-warning">{children}</button>
    );
};

export default ButtonWarning;
