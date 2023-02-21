import { useState, useEffect } from "react";
import { getGeoCaches } from "../../api/geocaches";
import { Container, Card, Row, Button } from "react-bootstrap";
import "./HomePage.scss";

const HomePage = () => {
    const [geocaches, setGeocaches] = useState([]);

    useEffect(() => {
        getGeoCaches().then(geocachesResult => {
            setGeocaches(geocachesResult.data);
        });
    }, []);

    const name1: string = geocaches[0]["name"];
    const time1: string = geocaches[0]["publishedDate"];
    const name2: string = geocaches[1]["name"];
    const time2: string = geocaches[1]["publishedDate"];
    const name3: string = geocaches[2]["name"];
    const time3: string = geocaches[2]["publishedDate"];

    return (
        <>
            <div className="screen">
                <div className="main">
                    <Container>
                        <Row><div className="mx-auto" style={{ width: "auto" }}>
                            <br /><br />
                            <h3>Uusimmat geokätköt</h3><br /></div>

                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-3">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        {name1}<br />{time1}
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-3">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        {name2}<br />{time2}
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-3">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        {name3}<br />{time3}
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-3">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        Kätködataa
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-3">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        Kätködataa
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-1">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        <div className="m-2">
                                            <h4>Näytä lisää</h4>
                                        </div>
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row><div className="mx-auto" style={{ width: "auto" }}>
                            <br /><br /><h3>Tulevat miitit</h3><br /></div>
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-4">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        <div className="m-2">

                                        </div>
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-4">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        <div className="m-2">

                                        </div>
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-4">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        <div className="m-2">

                                        </div>
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-4">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        <div className="m-2">

                                        </div>
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-4">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        <div className="m-2">

                                        </div>
                                    </div>
                                </Card></Button><br />
                        </Row>
                        <Row>
                            <Button className="button">
                                <Card className="mx-5 p-1">
                                    <div className="mx-auto" style={{ width: "auto" }}>
                                        <div className="m-2">
                                            <h4>Näytä lisää</h4>
                                        </div>
                                    </div>
                                </Card></Button><br /><br />
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default HomePage;
