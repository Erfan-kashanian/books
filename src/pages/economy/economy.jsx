import {UseFetch} from '../fetch/fetch';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './economy.css'
export default function Economy(){
   const [books,error] = UseFetch("economy_management");
   const[more,setMore]=useState(null)
    const result = books.filter((book) =>
    book.category === "economy_management" 
)
    const marketing = result.filter((item)=>item.subcategory === "marketing_sales")
    const management = result.filter((item)=>item.subcategory==="management")
    const podcast = result.filter((item)=>item.subcategory==="podcast")    

if (error) {return <p>{error}</p>}
    return (
        <div className='body'>
            <div className={more ? "introductionLess" : "introduction"}>
                <h1>اقتصاد و مدیریت</h1>
                <h3>قتصاد در میان دانش‌های علوم انسانی همواره به عنوان علمی سخت و پیچیده با زبانی فنی مطرح بوده که هر کس قادر به درک آن نیست. این علم مملو از آمار، نمودار، عدد و رقم است و همین امر خواندن آن را خسته کننده می‌کند و از اقتصاد علمی عبوس و خشک و انعطاف ناپذیر می‌سازد. برای همین خیلی‌ها تمایلی به شروع مطالعه درباره‌ی اقتصاد ندارند و آن را علمی تخصصی می‌دانند که هر کسی از آن سر در نمی‌آورد.</h3>
                <h3>با وجود این باور عمومی، درک مفاهیم اقتصادی برای عموم مردم امر ناممکنی نیست، مشروط بر اینکه مفاهیم پیچیده با زبانی ساده بیان شود. اینکه علمی پیچیدگی‌های خود را داشته باشد امر جدیدی نیست اما هنر اصلی آن است که این پیچیدگی‌ها با زبانی ساده فهم بیان شود. علم اقتصاد متعارف طرفدار اندیشه «بازار آزاد» است و با منطق عرضه و تقاضا فعالیت‌های اقتصادی را تحلیل می‌کند. این علم که در اکثر دانشگاه‌ها تدریس می‌شود گفتمان غالب در علم اقتصاد است که البته گفتمان‌های دیگر نقدهای زیادی به آن وارد می‌کنند.</h3>
                <button onClick={()=>{setMore(true)}} className={more ? "hideButton" : "showButton"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </button>
           <div className={more ? "inneroff" : "inner"}>
           <div className={more ? "hidden" : "shown"}></div>
           <h1>علم اقتصاد</h1>
            </div>
            </div>
            <div className={more ? "more" : "less"}>
                <h1>علم اقتصاد</h1>
                <h3>اقتصاد علم مهندسی زندگی است و مثل همه‌ علوم مهندسی بدون هنرمندی کار به‌جایی نمی‌رسد. برای این‌که جزئیات زندگی‌تان را با هنرمندی تمام مهندسی و اداره کنید، بهترین‌ کتاب‌های اقتصاد را از فیدیبو دانلود کرده و قوام زندگی‌تان را افزایش دهید
                </h3>            
                <h3>حالا دیگر چه کسی فارغ از اندیشه‌های اقتصادی می‌تواند شب‌ها چشم ببندد و صبح‌ علی‌الطلوع بدون توجه به اخبار و رویدادهای اقتصادی کار و بارش را از سر گیرد؟ اما باور عامی از اقتصاد درست نیست. اقتصاد دنیای متفاوتی است که زیر انبوهی از تصورهای نادرست گم شده است. فیدیبو در راستای تعمیق اندیشه‌ اقتصادی و ترویج علم اقتصاد بهترین کتاب‌های اقتصاد روز دنیا را پیگیری کرده و سعی می‌کند کارآمدترین‌ها را برای مخاطبان خود جمع‌آوری کند. هم‌اکنون قفسه کتاب‌های اقتصادی این سایت زیرمجموعه دسته‌ علوم اجتماعی، یکی از روزآمدترین و پربیننده‌ترین قفسه‌های موضوعی به‌شمار می‌رود؛ در این قفسه، از کتاب‌های تئوریک و دانشگاهی تا کتاب‌های کاربردی و تعلیمی احصا شده‌ و در دسترس مخاطبان قرارگرفته است. یک دانشجو، تاجر و حتی یک فرد خانه‌دار می‌تواند برای دغدغه‌های اقتصادی زندگی‌اش با کتاب‌های این قفسه چاره‌ای متفاوت بسازد. اتفاقا شاید بهترین تعریف برای اقتصاد همین باشد، سازوکار چاره‌اندیشی برای مراحل مختلف زندگی؛ تفاوتی‌ هم ندارد که مراحل مهم زندگی با مسئله‌ پولی و مالی درگیر باشد یا نه. </h3>
                <h3>اقتصاد به مباحث مالی و پولی محدود نمی‌شود، این علم یک سر در فلسفه دارد و یک سودای بزرگ در علوم اجتماعی. برای همین به‌اندازه‌ای که برای رئیس‌جمهور یک کشور حائز اهمیت است، برای تک‌تک جمعیت همان کشور هم مهم خواهد بود. هرکسی به‌اندازه تاثیرگذاری‌ که دارد باید از علم اقتصاد سر دربیاورد. وقتی این مقاله را می‌خوانید می‌توانید کتاب اقتصادی مورد نظرتان را تشخیص دهید و مطالعه را آغاز کنید. </h3>
                <button onClick={()=>setMore(false)} className={more ? "showButton" : "hideButton"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                </button>

            </div>
            <div className='middle'>
            <aside>
                <ul>
                    <li id='market'><Link to='./marketing'>بازاریابی و فروش</Link></li>
                    <li><Link to='./management'>مدیریت</Link></li>
                    <li><Link to='./podcast'>پادکست</Link></li>
                </ul>
            </aside>
            <div className='left'>
                <div className='part'>
                    <h1>بازاریابی و فروش</h1>
                    <div className='books'>
                        {marketing.map((item)=>{return <div className='item' key={item.id}>
                            <img src={item.image}/>
                            <h4 className='title'>{item.title}</h4>
                            <h4>نویسنده : {item.author}</h4>
                            <Link to={`/article/${item.id}`}>بیشتر</Link>

                        </div>})}
                        <Link to='./marketing'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>
                    </div>
                </div>
                <div className='line'></div>
                <div className='part'>
                    <h1>مدیریت</h1>
                    <div className='books'>{management.map((item)=>{return <div className='item' key={item.id}>
                        <img src={item.image}/>
                        <h4 className='title'>{item.title}</h4>
                        <h4>نویسنده : {item.author}</h4>
                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                    <Link to='./management'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
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