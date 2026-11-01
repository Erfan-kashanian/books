import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Iranian(){
       const [books,error] = UseFetch("novel","iranian")
        const result = books.filter((book) =>
    book.category === "novel" 
)
const persian = result.filter((item)=>item.subcategory === "iranian")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>رمان ایرانی</h1>
                <p>این نوع ادبی داستان و داستان‌نویسی بر اثر توسعهٔ ارتباط ایران و اروپا در زبان فارسی پدید آمده است و داستان‌نویسی به شیوهٔ امروزی در کشورهای عربی، ترکیه، ایران و هندوستان کمابیش هم‌زمان و در اواخر نیمهٔ دوم قرن نوزدهم باب شده است. از موجبات و مقدمات پیدایش رمان در زبان فارسی می‌توان به ورود صنعت چاپ، تأسیس مطبوعات و ترجمه از زبان‌های اروپایی که تحت تأثیر زبان فرانسه و بعدها تحت تأثیر زبان‌های روسی و انگلیسی بوده است، اشاره کرد. از رمان‌های این دوره می‌توان به امیرارسلان نامدار، کتاب احمد (نوشتهٔ طالبوف) و سیاحت‌نامه ابراهیم‌بیگ اشاره کرد. داستان فارسی امروزی از آغاز قرن بیستم رواج یافت. گرایش‌های ملی‌گرایانه و جستجوی اساطیر کهن بر داستان‌نویسی این دوره تأثیر گذاشته است. در این رابطه می‌توان به آثاری همچون شمس و طغرا، عشق و سلطنت، دام‌گستران، لازیکا، دلیران تنگستان، تهران مخوف، هما، پریچهر، زیبا، جنایات بشر یا آدم فروشان قرن بیستم، دارالمجانین و دسیسه اشاره کرد. رمان آتش بدون دود هفت جلدی :نادر ابراهیمی</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li id='select'><Link to='../novel/iranian'>ایرانی</Link></li>
                    <li><Link to='../novel/foriegn'>خارجی</Link></li>
                    <li><Link to='../novel/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>کتاب ها</h1>
                <div className='persianBooks'>
                    {persian.map((item)=>{return <div className='item' key={item.id}>
                    <img src={item.image}/>
                    <h4 className='title'>{item.title}</h4>
                    <h4>نویسنده : {item.author}</h4>
                    <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                </div>
                </div>
                <div className='leftAside'>
                <aside>
                    <h3>پیوند های مرتبط</h3>
                    <ul>
                        <li><a href='https://www.ketabnak.com/'>کتابناک</a></li>
                        <li><a href='https://taaghche.com/category/%DA%A9%D8%AA%D8%A7%D8%A8-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86'>طاقچه</a></li>
                        <li><a href='https://fidibo.com/'>فیدیبو</a></li>
                        <li><a href='https://www.iranketab.ir/'>ایران کتاب</a></li>
                        <li><a href='https://ketabrah.com/'>کتابراه</a></li>
                        <li><a href='https://deybook.com/'>دی بوک</a></li>
                    </ul>
                </aside>
                </div>
            </div>
        </div>
    )
}