import { useState, useEffect } from "react";
import { Geocache } from "../../model/Geocache";
import "../../styles/common.scss";
import {getGeoCaches} from "../../api/geocaches";

const GeocacheList = () => {
    const [geocaches, setGeocaches] = useState([]);

    useEffect(() => {
        getGeoCaches().then(geocachesResult => {
            setGeocaches(geocachesResult.data);
        });
    }, []); 

    type ColumnDefinitionType<T, K extends keyof T> = {
        key: K;
        header: string;
        width?: number;
    }

    const columns: ColumnDefinitionType<Geocache, keyof Geocache>[] = [
        {
            key: "referenceCode",
            header: "ID",
        },
        {
            key: "publishedDate",
            header: "Date & time"
        },
        {
            key: "name",
            header: "Name"
        }
    ];

    const headers = columns.map((column, index) => {
        return (
            <th
                key={`headCell-${index}`}
            >
                {column.header}
            </th>
        );
    });

    const rows = geocaches.map((row, index) => {
        return (
            <tr key={`row-${index}`}>
                {columns.map((column, index2) => {
                    return (
                        <td key={`cell-${index2}`}>
                            {row[column.key]}
                        </td>
                    );
                }
                )}
            </tr>
        );
    });

    return (
        <div>
            <h3>New geocaches</h3>
            <table>
                <thead>
                    <tr>{headers}</tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default GeocacheList;