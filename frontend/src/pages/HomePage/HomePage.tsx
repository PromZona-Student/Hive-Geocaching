import { useState, useEffect } from "react";
import { getGeoCaches } from "../../api/geocaches";
import "./HomePage.scss";
import { Geocache } from "../../model/Geocache";
import GeocacheList from "../../components/GeocacheList";
import PageLayout from "../../components/PageLayout";
import { Button } from "react-bootstrap";

const HomePage = () => {

    const [geocaches, setGeocaches] = useState<Array<Geocache>>([]);
    const [meetings, setMeetings] = useState<Array<Geocache>>([]);
    
    useEffect(() => {
        const meetingTypes: Array<string> = ["tapahtuma", "megatapahtuma", "siivoustapahtuma","yhteisöjuhla"];
        getGeoCaches({ limit: 6 }).then(geocachesResult => {
            const result: Array<Geocache> = geocachesResult.filter(cache => !meetingTypes.includes(cache.type.toLowerCase()));
            setGeocaches(result);
        });

        getGeoCaches({ limit: 6 }).then(meetingResult => {
            const result: Array<Geocache> = meetingResult.filter(cache => meetingTypes.includes(cache.type.toLowerCase()));
            setMeetings(result);
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
