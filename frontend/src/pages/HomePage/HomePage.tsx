import { useState, useEffect } from "react";
import { getGeoCaches } from "../../api/geocaches";
import { Container, Card, Row } from "react-bootstrap";
import "./HomePage.scss";
import { Geocache } from "../../model/Geocache";

const HomePage = () => {
    const [geocaches, setGeocaches] = useState<Array<Geocache>>([]);

    useEffect(() => {
        getGeoCaches().then(geocachesResult => {
            setGeocaches(geocachesResult);
        });
    }, []);

    return (
        <>
            <div className="screen" >
                <div className="main text-center">
                    <Container>
                        <div><br /><h3>Uusimmat geokätköt</h3><br /></div>
                    
                        {
                            geocaches.map((cache) => {
                               
                                return (
                                    <Row key={cache.referenceCode} className="mx-auto p-2">
                                        <Card className="mx-5">
                                            <div>{cache.name}</div>
                                            <div>{cache.publishedDate}</div>
                                        </Card>
                                    </Row>
                                );
                            })
                        }
                            
                        <Row className="mx-auto p-2">
                            <Card className="mx-5">
                                <div>
                                    Näytä lisää
                                </div>
                            </Card><br />
                        </Row>
                        <Row><div className="mx-auto">
                            <br /><h3>Tulevat miitit</h3><br /></div>
                        </Row>
                        <Row className="mx-auto p-2">
                            <Card className="mx-5">
                                <div>
                                    Miitti-<br />dataa
                                </div>
                            </Card>
                        </Row>
                        <Row className="mx-auto p-2">
                            <Card className="mx-5">
                                <div>
                                    Näytä lisää
                                </div>
                            </Card><br />
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default HomePage;
