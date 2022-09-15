import { useState, useEffect } from "react";
import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullname: "Mehmet", phone_number: "123123", },
        { fullname: "Ayşe  ", phone_number: "456789", },
        { fullname: "Nazlı ", phone_number: "789456", }
    ]);

    useEffect(() => { console.log(contacts); }, [contacts]);

    return (
        <div id="container">
            <h1>contacts</h1>
            <List settContacts={setContacts} contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )

}

export default Contacts;