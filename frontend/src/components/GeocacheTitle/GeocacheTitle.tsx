import { useState, useEffect } from "react";
import "./GeocacheTitle.scss";

interface Props {
    date: Date;
  }

const GeocacheTitle = (props: Props) => {
    const [isNew, setIsNew] = useState(false);
    const [minutesAgo, setMinutesAgo] = useState(0);
    const checkIsNew = () => {
        const HOUR = 1000 * 60 * 60;
        const anHourAgo = Date.now() - HOUR;
        if (props.date.getTime() > anHourAgo) {
            setIsNew(true);
        }
        else {
            setIsNew(false);
        } 
    };
    const getMinutesAgo = () => {
        const millis = Date.now() - props.date.getTime();
        setMinutesAgo(Math.floor(millis / 60000));
    };
    const formatDate = () => {
        return props.date.getDay()+"."+props.date.getMonth()+"."+props.date.getFullYear()+" "+props.date.getHours()+":"+props.date.getMinutes();
    };
    const setContent = () => {
        if(isNew){
            return <p className="new-cache-title">{minutesAgo} minuuttia</p>;
        }
        else{
            return <p>{formatDate()}</p>;
        }
    };
    const update = () => {
        checkIsNew();
        getMinutesAgo();
    };
    useEffect(() => {
        update();
        const interval = setInterval(update, 60000);
        return () => clearInterval(interval);
    });
    return (
        <div data-testid="geocache-title-div">
            {setContent()}
        </div>
    );
};

export default GeocacheTitle;