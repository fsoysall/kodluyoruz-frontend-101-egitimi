import { useState, useEffect } from "react";
import "./styles.css";

import List from "./List";
import Form from "./Form";

function ToDO() {
    const [todo, setToDO] = useState([
        { id: 0, durum: 0, işlem: "çay için su ısıt" },
        { id: 1, durum: 1, işlem: "2x yumurta",  },
        { id: 2, durum: 0, işlem: "domates" },
        { id: 3, durum: 0, işlem: "salatalık" },
        { id: 4, durum: 0, işlem: "biber" },
        { id: 5, durum: 1, işlem: "çayı demle", açıklama: "çayı suyu kaynamışsa" },
        { id: 6, durum: 1, işlem: "yumurtayı pişir", },
    ]);

    useEffect(() => { console.log(todo); }, [todo]);


    return (
        <div id="container">
            <h1>YAPILACAKLAR</h1>
            <List settToDO={setToDO} todo={todo}  />
            <Form addToDO={setToDO} todo={todo} />
        </div>
    )

}

export default ToDO;