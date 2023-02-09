import axios from "axios";

export const getGeoCaches = async () => {
    const geocaches = await axios(
        "/api/geocaches",
    );
    return geocaches;
};

