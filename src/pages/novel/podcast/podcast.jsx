import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Podcast2(){
       const [books,error] = UseFetch("novel","podcast")
        const result = books.filter((book) =>
    book.category === "novel" 
)
const persian = result.filter((item)=>item.subcategory === "podcast")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>پادکست</h1>
                <p>کتاب صوتی یکی از راحت‌ترین راه‌ها برای شروع کتاب‌خوانی است. خیلی‌ها دوست دارند کتاب بخوانند اما فرصت یا تمرکز کافی برای خواندن ندارند. یا اصلا می‌خواهند بدون پرداخت هزینه، چند کتاب مختلف را امتحان کنند. این کتاب‌ها برای کسانی مناسب‌اند که تازه می‌خواهند کتاب‌خوانی را شروع کنند یا هنوز نمی‌دانند از چه نوع کتاب‌هایی بیشتر لذت می‌برند.</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li><Link to='../novel/iranian'>ایرانی</Link></li>
                    <li><Link to='../novel/foriegn'>خارجی</Link></li>
                    <li id='select'><Link to='../novel/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>پادکست ها</h1>
                <div className='persianBooks'>
                    {persian.map((item)=>{return <div className='item' key={item.id}>
                    <img src={item.image}/>
                    <h4 className='title'>{item.title}</h4>
                    <h4>گوینده : {item.speaker}</h4>
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