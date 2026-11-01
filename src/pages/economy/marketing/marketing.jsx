import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Marketing(){
       const [books,error] = UseFetch("economy_management","marketing_sales")
        const result = books.filter((book) =>
    book.category === "economy_management" 
)
const marketing = result.filter((item)=>item.subcategory === "marketing_sales")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>بازاریابی و فروش</h1>
                <p>اگر فیلم سینمایی گرگ وال استریت را دیده باشید، حتما سکانس معروف « این خودکار را به من بفروش» را به خاطر دارید. سوال معروفی که نشان می‌دهد یک فرد واقعا چقدر در زمینه فروش و بازاریابی محصولات دانش و مهارت دارد. من قبل از اینکه به حوزه بازاریابی وارد شوم، دیدگاهی منفی نسبت به این فرایند فروش خودکار داشتم. چرا که حس می‌کردم فروشنده مدام به فکر این است که از ناآگاه بودن مخاطب سو استفاده کند و سرمایه او را از چنگش درآورد. اما حالا فهمیده‌ام اگر باور داشته باشی محصولی خوب است، همه تلاش‌هایی که می‌کنی در واقعیت به نفع خریدار است. بهترین نوع بازاریابی هم همین است. خبردار کردن افراد مختلف از وجود محصولی که زندگی آن‌ها را راحت‌تر و معنادارتر می‌کند. اگر شما هم باور دارید بازاریابی می‌تواند به بهتر شدن محیط اطراف ما کمک می‌کند، پیشنهاد می‌کنیم این یادداشت را بخوانید و با کتاب های بازاریابی که به رشد و پیشرفت ما در مسیر فروش کمک می‌کنند، آشنا شوید.</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li id='select'><Link to='../economy/marketing'> بازاریابی و فروش</Link></li>
                    <li ><Link to='../economy/management'> مدیریت</Link></li>
                    <li><Link to='../economy/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>کتاب ها</h1>
                <div className='persianBooks'>
                    {marketing.map((item)=>{return <div className='item' key={item.id}>
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