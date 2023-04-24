import "./HomePage.scss";
import { useState, useEffect, useCallback } from "react";
import { getGeoCaches, getMeetings, searchGeoCaches } from "../../api/geocaches";
import { Geocache } from "../../model/Geocache";
import GeocacheList from "../../components/GeocacheList";
import PageLayout from "../../components/PageLayout";
import { Button } from "react-bootstrap";
import Spinner from "../../components/Spinner";


const TAKE_AMOUNT = 6;

const HomePage = () => {

    const [geocaches, setGeocaches] = useState<Array<Geocache>>([]);
    const [meetings, setMeetings] = useState<Array<Geocache>>([]);
    
    useEffect(() => {
        const meetingTypes: Array<string> = ["tapahtuma", "megatapahtuma", "siivoustapahtuma","yhteisöjuhla"];
        getGeoCaches({}).then(geocachesResult => {
            const result: Array<Geocache> = geocachesResult.filter(cache => !meetingTypes.includes(cache.type.toLowerCase())).slice(0,6);
            setGeocaches(result);
        });

        getMeetings({}).then(meetingResult => {
            const result: Array<Geocache> = meetingResult.filter(cache => meetingTypes.includes(cache.type.toLowerCase())).slice(0,6);
            setMeetings(result);
        });
    }, []);
    
    const [cachesIndex, setCachesIndex] = useState(0);
    const [loadingCaches, setLoadingCaches] = useState(false);

    const fetchMoreCaches = useCallback(async () => {
        setLoadingCaches(true);
        const newCaches = await searchGeoCaches({}, "newest", cachesIndex, TAKE_AMOUNT);
        setGeocaches([...geocaches, ...newCaches]);
        setCachesIndex(cachesIndex + TAKE_AMOUNT);
        setLoadingCaches(false);
    }, [cachesIndex, geocaches]);

    useEffect(() => {
        if (cachesIndex == 0) {
            fetchMoreCaches();
        }
    }, [cachesIndex, fetchMoreCaches]);


    return (
        <PageLayout>
            <div className="home-page-content">
                <div className="feed-section">
                    <div className="feed-header">
                        <h3>Uusimmat geokätköt</h3>
                    </div>
                    <GeocacheList geocaches={geocaches} />
                    {loadingCaches && <Spinner />}
                    <Button disabled={loadingCaches} variant="light" className="load-button" onClick={fetchMoreCaches}>Näytä lisää</Button>
                </div>
                <div className="feed-section">
                    <div className="feed-header">
                        <h3>Tulevat miitit</h3>
                    </div>
                    <p>Miitti-dataa</p>
                    <GeocacheList geocaches={meetings} />
                    <Button variant="light" className="load-button">Näytä lisää</Button>
                </div>
            </div>
        </PageLayout>
    );
};

export default HomePage;
