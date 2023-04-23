import { useState, useEffect } from "react";
import { getGeoCaches, getMeetings } from "../../api/geocaches";
import "./HomePage.scss";
import { Geocache } from "../../model/Geocache";
import GeocacheList from "../../components/GeocacheList";
import PageLayout from "../../components/PageLayout";
import { Button } from "react-bootstrap";

const HomePage = () => {

    const [geocaches, setGeocaches] = useState<Array<Geocache>>([]);
    const [meetings, setMeetings] = useState<Array<Geocache>>([]);

    useEffect(() => {
        getGeoCaches({ limit: 6 }).then(geocachesResult => {
            setGeocaches(geocachesResult);
        });
    }, []);

    useEffect(() => {
        getMeetings({ limit: 6 }).then(meetingResult => {
            setMeetings(meetingResult);
        });
    }, []);

    return (
        <PageLayout>
            <div className="home-page-content">
                <div className="feed-section">
                    <div className="feed-header">
                        <h3>Uusimmat geokätköt</h3>
                    </div>
                    <GeocacheList geocaches={geocaches} />
                    <Button variant="light">Näytä lisää</Button>
                </div>
                <div className="feed-section">
                    <div className="feed-header">
                        <h3>Tulevat miitit</h3>
                    </div>
                    <p>Miitti-dataa</p>
                    <GeocacheList geocaches={meetings} />
                    <Button variant="light">Näytä lisää</Button>
                </div>
            </div>
        </PageLayout>
    );
};

export default HomePage;
