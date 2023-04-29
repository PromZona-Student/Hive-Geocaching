import "./Pagelayout.scss";
import NavBar from "../NavBar";

interface Props {
    children: React.ReactNode
}

const PageLayout = ({
    children
}: Props) => {
    return (
        <>
            <NavBar/>
            <div className="page-layout">
                {children}
            </div>
        </>
    );
};

export default PageLayout;