import {UseFetch} from '../fetch/fetch';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Novel(){
   const [books,error] = UseFetch("novel");
   const[more,setMore]=useState(null)
    const result = books.filter((book) =>
    book.category === "novel" 
)
    const iranian = result.filter((item)=>item.subcategory === "iranian")
    const foreign = result.filter((item)=>item.subcategory==="foreign")
    const podcast = result.filter((item)=>item.subcategory==="podcast")    

if (error) {return <p>{error}</p>}
    return (
        <div className='body'>
            <div className={more ? "introductionLess" : "introduction"}>
                <h1>رمان</h1>
                <h3>رمان (به فرانسوی: Roman) گونه‌ای از ادبیات داستانی است که به نثر نوشته می‌شود و در مقایسه با داستان‌های کوتاه، حجم و گستردگی بیشتری دارد. این قالب ادبی معمولاً روایت پیچیده‌ای از زندگی شخصیت‌ها را در بر می‌گیرد و شامل پیرنگ، درون‌مایه و فضایی منسجم است. تاریخچهٔ شکل‌گیری رمان به شکلی که امروزه شناخته می‌شود، به چندین قرن پیش بازمی‌گردد و در طول زمان، دگرگونی‌های بسیاری را در ساختار و محتوای خود تجربه کرده است. این گونهٔ ادبی به نویسنده امکان می‌دهد تا با بهره‌گیری از ابزارهایی چون توصیف، گفت‌وگو و کشمکش، جهانی خیالی یا واقع‌گرا را برای خواننده ترسیم کند.</h3>
                <h3>رمان‌ها را می‌توان بر اساس معیارهای گوناگونی مانند سبک، دورهٔ تاریخی یا درون‌مایه طبقه‌بندی کرد. در ۲۰۰ سال اخیر، رمان تبدیل به یکی از مهم‌ترین اشکال ادبی شده است. رمان را ژانر غالب در دوران مدرنیسم دانسته‌اند.</h3>
                <button onClick={()=>{setMore(true)}} className={more ? "hideButton" : "showButton"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </button>
           <div className={more ? "inneroff" : "inner"}>
           <div className={more ? "hidden" : "shown"}></div>
           <h1>تاریخچه</h1>
            </div>
            </div>
            <div className={more ? "more" : "less"}>
                <h1>تاریخچه</h1>
                <h3>در اصل کلمهٔ رمان، بیانگر زبان پیشین و عامیانهٔ فرانسویان بود که در مقابل زبان لاتین، زبان عالمانه و ادبی آن روزگار، قرار داشت. ضمناً به آثار ادبی منظوم از نوع داستان‌های تخیلی و ساختگی که به زبان رومیایی (رمان) کتاب شده بود نیز گفته می‌شود. نظیر رمان‌های حاوی اوضاع و احوال شوالیه‌ها یا رمان‌های سازگار و متناسب با نزاکت و تعلیم و تربیت. رمان در مورد همهٔ آن چیزهایی گفته می‌شود که مربوط به تمدن، هنر و مخصوصاً زبان‌های آن ردیف از کشورهایی است که از قرن پنجم تا قرن دوازدهم میلادی تحت سیطرهٔ مادی و معنوی رومی‌ها بودند. از میان زبان‌های رمان می‌توان فرانسوی، ایتالیایی، اسپانیایی، رومانیایی و پرتغالی را نام برد. در قرون وسطی رمان به زبان ادبی شمال فرانسه و از ۱۰۶۶ میلادی به زبان ادبی انگلستان نیز گفته می‌شده است. در نتیجه می‌توان گفت که از قرن ۱۲ میلادی به بعد، فرانسه شمالی و انگلستان زمینهٔ مساعدی را برای رشد و انتشار فرهنگ و تمدن فراهم آورده بودند که بیان ادبی دست اول آن زبان رمان و به صورت داستان‌سرایی و قصه‌گویی منظوم بود. بدین ترتیب نوع ادبی داستانی از آن‌جا که به زبان رمان نوشته می‌شود، به رمان معروف شد. در قرون وسطی داستان شهسوارانه مطلوب شمرده می‌شد (از همان نوع داستان‌های عیاری فارسی). در قرن شانزدهم فرانسوا رابله و سروانتس آن را به معنای کمابیش امروزی به کار بردند که در قرن هفدهم جا افتاد. سرانجام در قرن نوزدهم، رمان چه از نظر شمار آثار و چه از لحاظ زبان و ساختار، به اوج شکوفایی رسید. از این‌رو قرن نوزدهم را دورهٔ خاصی در تاریخ داستان‌نویسی در اروپا و مبدأ اشاعهٔ آن در نقاط دیگر جهان می‌شناسند.</h3>            
                <button onClick={()=>setMore(false)} className={more ? "showButton" : "hideButton"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                </button>

            </div>
            <div className='middle'>
            <aside>
                <ul>
                    <li><Link to='./iranian'>ایرانی</Link></li>
                    <li><Link to='./foriegn'>خارجی</Link></li>
                    <li><Link to='./podcast'>پادکست</Link></li>
                </ul>
            </aside>
            <div className='left'>
                <div className='part'>
                    <h1>ایرانی</h1>
                    <div className='books'>
                        {iranian.map((item)=>{return <div className='item' key={item.id}>
                            <img src={item.image}/>
                            <h4 className='title'>{item.title}</h4>
                            <h4>نویسنده : {item.author}</h4>
                            <Link to={`/article/${item.id}`}>بیشتر</Link>

                        </div>})}
                        <Link to='./iranian'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>
                    </div>
                </div>
                <div className='line'></div>
                <div className='part'>
                    <h1>خارجی</h1>
                    <div className='books'>{foreign.map((item)=>{return <div className='item' key={item.id}>
                        <img src={item.image}/>
                        <h4 className='title'>{item.title}</h4>
                        <h4>نویسنده : {item.author}</h4>
                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                    <Link to='./foriegn'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>
                    </div>
                </div>
                <div className='line'></div>
                <div className='part'>
                    <h1>پادکست</h1>
                        <div className='books'>{podcast.map((item)=>{return <div className='item' key={item.id}>
                        <img src={item.image}/>
                        <h4 className='title'>{item.title}</h4>
                        <h4>گوینده : {item.speaker}</h4>
                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                    <Link to='./podcast'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link></div>
                </div>
                <div className='line'></div>

            </div>
            </div>
        </div>
    );
}