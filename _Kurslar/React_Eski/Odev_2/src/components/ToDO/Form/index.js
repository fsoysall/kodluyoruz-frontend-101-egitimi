import { useState, useEffect } from 'react';

const initialFormValues = {id:0, işlem: "", durum: 0, açıklama: "" };

function Form({ addToDO, todo }) {

    const [form, setForm] = useState(initialFormValues);

    useEffect(() => { setForm(initialFormValues); }, [todo]);

    const onChangeInput = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.işlem === "" /* || form.durum === "" */) { return false; }
        addToDO([...todo, form]);
        // addToDO((prevState) => [...prevState, form]);
        setForm(initialFormValues);
    };

    return (
        <form onSubmit={onSubmit}>
            <div style={{ textAlign: "left" }} >
                <input style={{ width: '80%' }} name="işlem" placeholder='İşlem' value={form.işlem} onChange={onChangeInput} />
                <input onChange={onChangeInput} style={{ float:'right',width: '15%' }} type="checkbox" name="durum" placeholder='Durum' value={form.durum}  />
                <br />
                <div>
                    <input style={{ width: '80%' }} name="açıklama" placeholder='Açıklama' value={form.açıklama} onChange={onChangeInput} />
                    <div style={{ float:'right', width: '15%' }} className='btn'><button>EK'le</button></div>
                </div>
            </div>
        </form>
    );
}

export default Form;