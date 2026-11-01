import {useFormik} from "formik";

export default function Sign(){
    const formik =useFormik({
        initialValues:{
            userName:"",
            passWord:"",
            passWordRepet:"",
            phone:"",
            email:""
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
            if(!values.passWordRepet){
                errors.passWordRepet="رمز عبور را وارد کنید"
            }
            if(values.passWordRepet!== values.passWord){
                errors.passWordRepet="با رمز عبور نوشته شده تطابق ندارد"
            }
            if(!values.phone){
                errors.phone="شماره همراه را وارد کنید"
            }
            if(!values.email){
                errors.email=" ایمیل را وارد کنید"
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
            <label>
                <span> تکرار رمز عبور : </span>
                <input type='text'  id='passWordRepet' placeholder='****'
                value={formik.values.passWordRepet}
                onChange={formik.handleChange}
                className={formik.errors.passWordRepet && "input-err"}/>
            </label>
            {formik.errors.passWordRepet &&<div className='error'>{formik.errors.passWordRepet}</div>}
            <label>
                <span> شماره همراه : </span>
                <input type='text'  id='phone' placeholder='09194252656'
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={formik.errors.phone && "input-err"}/>
            </label>
            {formik.errors.phone &&<div className='error'>{formik.errors.phone}</div>}
            <button>ثبت نام</button>
            
        </form>
      )
}