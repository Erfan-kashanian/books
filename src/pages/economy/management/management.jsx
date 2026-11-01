import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Management(){
       const [books,error] = UseFetch("economy_management","management")
        const result = books.filter((book) =>
    book.category === "economy_management" 
)
const management = result.filter((item)=>item.subcategory === "management")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>مدیریت</h1>
                <p>برای اینکه مدیر خوبی باشیم علاوه بر داشتن قابلیت‌ها و پتانسیل‌های درونی آموزش‌هایی نیز نیاز داریم. آموزش‌هایی در حوزه تخصصی رشته‌ای که در آن فعال هستیم و مواردی در حوزه‌های مختلف دیگر نظیر ارتباطات، علوم انسانی، تعاملات بینافردی و… هرکدام از این موارد بخش‌هایی از درون ما را ساخته و به‌تدریج و در کنار هم ما را آماده مواجهه با مسائل و حل‌وفصل کردن آنها می‌کند. ناگفته پیداست که برای این امر انتهایی متصور نیست و هرچقدر هم که بدانیم بازهم کم است. علوم مختلف روزبه‌روز در حال تحول و پیشرفت هستند و لازم است برای موفق بودن به‌روز باشیم. در این یادداشت تلاش کرده‌ایم به معرفی کتاب هایی بپردازیم که در حوزه مدیریت کمک خوبی هستند. کتاب‌های ابتدای یادداشت سعی در معرفی مفهوم مدیریت دارند آنها به وجوه مختلفی می‌پردازند که در پی وجود یک مدیریت قوی و کامل می‌توانند رشد پیداکرده و باعث موفقیت مجموعه و یا سازمان شوند. کتاب‌های دسته دوم اما در پی شناخت و تبیین نقش یک مدیر در موفقیت مجموعه است.</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li id='market'><Link to='../economy/marketing'> بازاریابی و فروش</Link></li>
                    <li id='select'><Link to='../economy/management'> مدیریت</Link></li>
                    <li><Link to='../economy/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>کتاب ها</h1>
                <div className='persianBooks'>
                    {management.map((item)=>{return <div className='item' key={item.id}>
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