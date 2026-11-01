import './login.css'
import {useFormik} from "formik";


export default function Login(){
  const formik =useFormik({
    initialValues:{
        userName:"",
        passWord:"",
    },
    onSubmit:values=>{console.log(values);
    },
    validate:values=>{
        let errors={}
        if(!values.userName){
            errors.userName="نام کاربری را وارد کنید"
        }
        if(!values.passWord){
            errors.passWord="رمز عبور را وارد کنید"
        }
        else if(values.passWord.length<=3){
            errors.passWord="رمز عبور باید بیشتر از سه حرف باشد"
        }
        else if(!values.passWord.includes(0) && !values.passWord.includes(1) && !values.passWord.includes(2) && !values.passWord.includes(3)
        && !values.passWord.includes(4) && !values.passWord.includes(5) && !values.passWord.includes(6) && !values.passWord.includes(7) && !values.passWord.includes(8) && !values.passWord.includes(9)){
            errors.passWord="رمز عبور باید شامل اعداد باشد"
        }
        return errors
    }
  }) 
  return(
    <form onSubmit={formik.handleSubmit}>
        <label>
            <span>نام کاربری : </span>
            <input type='text' id='userName' placeholder='عرفان کاشانیان'
            value={formik.values.userName}
            onChange={formik.handleChange}
            className={formik.errors.userName && "input-err"}
            />
        </label>
        {formik.errors.userName && <div className='error'>{formik.errors.userName}</div>}
        <label>
            <span>رمز عبور : </span>
            <input type='text'  id='passWord' placeholder='****'
            value={formik.values.passWord}
            onChange={formik.handleChange}
            className={formik.errors.passWord && "input-err"}/>
        </label>
        {formik.errors.passWord &&<div className='error'>{formik.errors.passWord}</div>}
        <button>ورود</button>
        <p>هنوز ثبت نام نکردی ؟ <a href='./signin'>اینجا</a> رو کلیک کن</p>
    </form>
  )
}