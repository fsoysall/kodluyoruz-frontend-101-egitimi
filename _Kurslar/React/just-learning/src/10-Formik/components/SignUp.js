import { useFormik } from 'formik'
import validationSchema from './validations.js'
import './SignUp.css'

export default
    function SignUp() {

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: { email: "e@r", password: "1234", password2: "12345", hobbies: [], sexuality: 0 },
            onSubmit: (values) => { console.log(values); },
            validationSchema,
        });

    return (
        <div className='center border1' style={{ marginTop: "30px" }} >
            <h1 className='center' >Sign Up</h1>
            
            <form onSubmit={handleSubmit}>
                <div style={{ margin: "5px auto", width: "auto" }}>

                    <table>
                        <tbody>
                            <tr>
                                <td><label>EPosta :</label></td>
                                <td><input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} /></td>
                            </tr>
                            <tr><td colSpan={"2"}>{errors.password && touched.password && <div className='error' >{errors.password}</div>}</td></tr>

                            <tr>
                                <td><label>Parola :</label></td>
                                <td><input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} /></td>
                            </tr>
                            <tr><td colSpan={"2"}>{errors.password && touched.password && <div className='error' >{errors.password}</div>}</td></tr>

                            <tr>
                                <td><label>Parola Onay :</label></td>
                                <td><input name='password2' value={values.password2} onChange={handleChange} onBlur={handleBlur} /></td>
                            </tr>
                            <tr><td colSpan={"2"}>{errors.password && touched.password && <div className='error' >{errors.password}</div>}</td></tr>

                            <tr>
                                <td><label>Hobiler :</label></td>
                                <td>
                                    <label><input htmlFor='hobbies' type="checkbox" onChange={handleChange} onBlur={handleBlur} name="hobbies" value="Yürümek" /> Yürümek</label><br />
                                    <label><input htmlFor='hobbies' type="checkbox" onChange={handleChange} onBlur={handleBlur} name="hobbies" value="Koşmak" /> Koşmak</label><br />
                                    <label><input htmlFor='hobbies' type="checkbox" onChange={handleChange} onBlur={handleBlur} name="hobbies" value="Bisiklet Sürmek" /> Bisiklet Sürmek</label>
                                </td>
                            </tr>
                            <tr><td colSpan={"2"}>{errors.hobbies && touched.hobbies && <div className='error' >{errors.hobbies}</div>}</td></tr>

                            <tr>
                                <td><label>Cinsiyet :</label></td>
                                <td>
                                    <label>
                                        <input type="radio" name="sexuality" value="1" onChange={handleChange} onBlur={handleBlur} />Erkek</label>&nbsp; | &nbsp;
                                    <label>Bayan &nbsp;
                                        <input type="radio" name="sexuality" value="2" onChange={handleChange} onBlur={handleBlur} /></label>
                                </td>
                            </tr>
                            <tr><td colSpan={"2"}>{errors.sexuality && touched.sexuality && <div className='error' >{errors.sexuality}</div>}</td></tr>

                            <tr>
                                <td><label>Cinsiyet :</label></td>
                                <td>
                                </td>
                            </tr>
                            <tr><td colSpan={"2"} className='centerr taRight'>
                                <button type='submit' style={{ fontSize: "12pt" }}  >&nbsp;&nbsp; İleri &nbsp;&nbsp;</button>
                            </td></tr>

                            <tr><td colSpan={"2"} className='taCenter'>
                                {JSON.stringify(values)}
                            </td></tr>

                        </tbody>
                    </table>

                </div>

            </form >
        </div >
    )

}