import { useState } from "react";

function List({ settContacts, contacts }) {
    const [filterText, setFilterText] = useState("");
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    });

    const DeleteMe = ( i) => {
        contacts.splice(i, 1);
        settContacts([...contacts]);

    }

    return (
        <div>
            <input placeholder="Filter contact" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <ul className="list">
                {contacts.map((c, i) => (
                    <li key={i}>
                        <span>{c.fullname}</span>
                        <span>{c.phone_number}</span>
                        <button type="button" onClick={(e)=>{DeleteMe( i)} } >x</button>
                        {/* <button type="button" onClick={DeleteMe(i)} >x</button> */}
                    </li>
                ))}
            </ul>
            <p>Total contacts ({filtered.length}) </p>
        </div>
    );

}



export default List;