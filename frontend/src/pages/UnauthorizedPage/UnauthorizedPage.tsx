import PageLayout from "../../components/PageLayout";
import "./UnauthorizedPage.scss";
interface Props{
    msg: string
}

const UnauthorizedPage = ({msg}: Props) => {
    return (
        <PageLayout>
            <div className="unauthorized-page-content">
                <b>Sinulla ei ole oikeutta nähdä tätä sisältöä</b>
                <p>Sinun tulee olla kirjautuneena palveluun!</p>
            </div>
        </PageLayout>
    );
};

export default UnauthorizedPage;