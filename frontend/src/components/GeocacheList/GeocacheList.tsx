import { useState, useEffect } from "react";
import axios from "axios";
import { Geocache } from "../../model/Geocache";

const GeocacheList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        console.log("effect");
        axios
            .get("/api/geocaches")
            .then(response => {
                console.log("promise fulfilled");
                setNotes(response.data);
            });
    }, []);
  
    console.log("render", notes.length, "notes");

    const data: Array<Geocache> = notes;

    //--------------- Table stuff ----------------------

    type ColumnDefinitionType<T, K extends keyof T> = {
        key: K;
        header: string;
        width?: number;
    }

    const columns: ColumnDefinitionType<Geocache, keyof Geocache>[] = [
        {
            key: "id",
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

    const style = {
        borderCollapse: "collapse"
    } as const;

    const headers = columns.map((column, index) => {
        const style = {
            width: column.width ?? 100, // 100 is our default value if width is not defined
            borderBottom: "2px solid black"
        };
  
        return (
            <th
                key={`headCell-${index}`}
                style={style}
            >
                {column.header}
            </th>
        );
    });

    const rows = data.map((row, index) => {
        return (
            <tr key={`row-${index}`}>
                {columns.map((column, index2) => {
                    return (
                        <td key={`cell-${index2}`} style={style}>
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
            <table style={style}>
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