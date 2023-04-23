import "./Spinner.scss";
import { ImSpinner2 } from "react-icons/im";

interface Props{
    size?: string
}

const Spinner = ({ size = "30px" }: Props) => {
    return (
        <>
            <ImSpinner2 className="spinner" size={size}/>
        </>
    );
};

export default Spinner;