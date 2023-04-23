import { useState, useEffect, useCallback } from "react";
import "./GeocacheTitle.scss";

interface Props {
    date: Date;
}

const GeocacheTitle = ({ date }: Props) => {
    const [isNew, setIsNew] = useState(false);
    const [minutesAgo, setMinutesAgo] = useState(0);

    const checkIsNew = useCallback(() => {
        const HOUR = 1000 * 60 * 60;
        const anHourAgo = Date.now() - HOUR;
        if (date.getTime() > anHourAgo) {
            setIsNew(true);
        }
        else {
            setIsNew(false);
        }
    }, [date]);

    const getMinutesAgo = useCallback(() => {
        const millis = Date.now() - date.getTime();
        setMinutesAgo(Math.floor(millis / 60000));
    },[date]);

    const formatTime = (num: number) => {
        return num < 10 ? `0${num}` : num.toString();
    };

    const formatDateTime = () => {
        return `${formatTime(date.getDate())}.${formatTime(date.getMonth() + 1)}.${date.getFullYear()} ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
    };

    const setContent = () => {
        if (isNew) {
            return <p className="new-cache-title">{minutesAgo} minuuttia sitten</p>;
        }
        else {
            return <p>{formatDateTime()}</p>;
        }
    };

    const update = useCallback(() => {
        checkIsNew();
        getMinutesAgo();
    }, [checkIsNew, getMinutesAgo]);

    useEffect(() => {
        update();
        const interval = setInterval(update, 60000);
        return () => clearInterval(interval);
    }, [update]);

    return (
        <div data-testid="geocache-title-div">
            {setContent()}
        </div>
    );
};

export default GeocacheTitle;