import { useState, useEffect } from "react";
import { getGeoCaches } from "../../api/geocaches";
import "./HomePage.scss";
import { Geocache } from "../../model/Geocache";
import GeocacheList from "../../components/GeocacheList";
import PageLayout from "../../components/PageLayout";
import { Button } from "react-bootstrap";

const HomePage = () => {

    const [geocaches, setGeocaches] = useState<Array<Geocache>>([]);

    useEffect(() => {
        getGeoCaches({ limit: 6 }).then(geocachesResult => {
            setGeocaches(geocachesResult);
        });
    }, []);

    return (
        <PageLayout>
            <div className="home-page-content">
                <div className="feed-section">
                    <h3>Uusimmat geokätköt</h3>
                    <GeocacheList geocaches={geocaches} />
                    <Button variant="light">Näytä lisää</Button>
                </div>
                <div className="feed-section">
                    <h3>Tulevat miitit</h3>
                    <p>Miitti-dataa</p>
                    <Button variant="light">Näytä lisää</Button>
                </div>
            </div>
        </PageLayout>
    );
};

export default HomePage;
