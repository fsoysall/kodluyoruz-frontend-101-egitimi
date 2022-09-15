import { useState } from "react";

function List({ settToDO, todo }) {

    const [filterText, setFilterText] = useState("");
    const [durum2, setDurum2] = useState(3);

    var filtered = todo.filter((item) => {
        return (item.durum === durum2 || durum2 > 1)  && Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    });

    const toggleCheck = (id) => {
        var o = todo.find((item) => item.id === id);
        o.durum = (o.durum + 1) % 2;
        settToDO([...todo]);
    }

    const DeleteMe = (i) => { todo.splice(i, 1); settToDO([...todo]); }

    const BekleyenleriGöster = () => { setDurum2(0); DurumuGöster(); }
    const BitenleriGöster = () => { setDurum2(1); DurumuGöster(); }
    const HepsiniGöster = () => { setDurum2(2); DurumuGöster(); }

    const DurumuGöster = () => { window.document.title = `${durum2} : ${filtered.length} | ${window.document.title}`; }

    return (
        <div>
            <input placeholder="Filter ToDO" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <ul className="list">
                {filtered.map((c, i) => (
                    <li key={i}>
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: "05%" }} ><input onChange={(e) => { toggleCheck(c.id) }} type="checkbox" name="durum" placeholder='Durum' checked={c.durum} /></td>
                                    <td style={{ width: "05%" }} ><span>{c.durum}</span></td>
                                    <td style={{ width: "35%", "textAlign": "left" }} ><span>{c.işlem}</span></td>
                                    <td style={{ width: "50%" }} ><span>{c.açıklama}</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <button type="button" onClick={(e) => { DeleteMe(i) }} >x</button>
                    </li>
                ))}
            </ul>
            <p><b>İŞLEMLER :</b> {filtered.length} / {todo.length} Adet</p>
            <table style={{ width: '100%' }} ><tbody><tr>
                <td><button onClick={(e) => { BitenleriGöster() }} >Biten</button></td>
                <td><button onClick={(e) => { HepsiniGöster() }} >Hepsi</button></td>
                <td><button onClick={(e) => { BekleyenleriGöster() }} >Bekleyen</button></td>
            </tr></tbody></table>

        </div>

    );


}



export default List;