import { Accordion } from "react-bootstrap";

interface Props {
    header: string
    eventKey: string
    children: React.ReactNode
}

const MapFilterItem = ({
    header,
    eventKey,
    children
}: Props) => {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                {header}
            </Accordion.Header>
            <Accordion.Body>
                {children}
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default MapFilterItem;