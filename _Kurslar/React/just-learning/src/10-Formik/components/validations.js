import * as yup from "yup"; 

const validations = yup.object().shape(
    {
        email: yup.string().required('GİRİLMEMİŞ !').email('GEÇERSİZ EPosta !'),
        password: yup.string().required('GİRİLMEMİŞ !').min(5,'EN AZ 5 Harf Giriniz !'),
        password2: yup.string().required('GİRİLMEMİŞ !').oneOf([yup.ref("password")],'Parola EŞLEŞMİYOR !'),
        sexuality: yup.number().required("GİRİLMEMİŞ")
    }
);

export default validations
 