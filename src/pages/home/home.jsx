
import './home.css'
import { UseFetch } from '../fetch/fetch';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const [books, error] = UseFetch();

    const allBooks = Array.isArray(books) ? books : [];

    const [more, setMore] = useState(null);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const literature = allBooks.filter(
        (book) => book.category === "literature"
    );
    const literature2 = literature.filter(
        (book) => book.subcategory !== "podcast"
    );

    const novel = allBooks.filter(
        (book) => book.category === "novel"
    );
    const novel2 = novel.filter(
        (book) => book.subcategory !== "podcast"
    );

    const economy = allBooks.filter(
        (book) => book.category === "economy_management"
    );
    const economy2 = economy.filter(
        (book) => book.subcategory !== "podcast"
    );

    const history = allBooks.filter(
        (book) => book.category === "history"
    );
    const history2 = history.filter(
        (book) => book.subcategory !== "podcast"
    );

    const handleSearch = () => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return;
        }

        const results = allBooks.filter((item) =>
            (item.title || "").toLowerCase().includes(query) ||
            (item.author || "").toLowerCase().includes(query) ||
            (item.speaker || "").toLowerCase().includes(query)
        );

        navigate("/search", {
            state: {
                results: results,
                search: search.trim()
            }
        });
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className='main'>
            <div className="hero">
                <div className='input'>
                    <input
                        id="input"
                        placeholder="نام کتاب، نویسنده یا پادکست را وارد کنید"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />

                    <button onClick={handleSearch}>
                        جست و جو
                    </button>
                </div>

                <h2>دانلود و خرید کتاب در همه ی موضوعات و سلیقه ها</h2>
                <h2>دانلود پادکست های داستانی، آموزشی، روانشناسی و ...</h2>
            </div>

            <div className='home'>
                <div className={more ? "introductionLess" : "introduction"}>
                    <h1>کتابخانه</h1>

                    <h3>
                        کتابخانه یکی از بزرگترین سایت های دانلود کتاب رایگان است.
                        مزیت خواندن کتاب رایگان در کتابخانه این است که می‌توانید
                        از تمام امکانات کتابخوان طاقچه مانند اشتراک‌گذاری قسمت‌های
                        دلخواه در شبکه‌های اجتماعی، تغییر نوع و اندازه فونت و
                        هایلایت کردن متن استفاده کنید. علاوه‌براین کتاب‌هایی که
                        در طاقچه می‌توانید به صورت رایگان دانلود کنید، به صورت
                        قانونی منتشر شده‌اند. در این قسمت کتاب های رایگان متنوعی
                        وجود دارد. علاوه بر کتاب‌هایی در دسته رمان و داستان ایرانی
                        و خارجی، می‌توانید کتاب‌های کودکانه و همچنین موفقیت و
                        خودیاری هم دانلود کنید و از خواندن آن‌ها لذت برید.
                        پیشنهاد می‌کنیم برای تجربه‌ی بهتر در مطالعه، اپلیکیشن
                        کتاب الکترونیکی و صوتی کتابخانه را نصب کنید و کتاب‌های
                        مدنظرتان را در اپلیکیشن بخوانید یا بشنوید.
                    </h3>

                    <button
                        onClick={() => setMore(true)}
                        className={more ? "hideButton" : "showButton"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-down-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </button>

                    <div className={more ? "inneroff" : "inner"}>
                        <div className={more ? "hidden" : "shown"}></div>
                        <h1>بخش های مختلف سایت</h1>
                    </div>
                </div>

                <div className={more ? "more" : "less"}>
                    <h1>بخش های مختلف سایت</h1>

                    <h3>
                        در این سایت سعی در جمع آوری کتاب ها در چهار موضوع شده
                        است که به ترتیب عبارت اند از : ادبیات، اقتصاد و مدیریت،
                        رمان، تاریخ و هر کدام از این قسمت ها دارای چند زیرمجموعه
                        هستند و در هر زیر مجموعه کتاب های معروف و مطرح برای
                        دانلود و خرید قرار داده شده است. با رجوع به دسته بندی های
                        منوی بالای سایت و همچنین در سمت راست سایت میتوانید کتاب
                        های مربوطه را مشاهده بفرمایید. علاوه بر آن با استفاده
                        از نوار جست و جو میتوانید کتاب مد نظر خود را پیدا کنید.
                    </h3>

                    <button
                        onClick={() => setMore(false)}
                        className={more ? "showButton" : "hideButton"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-up-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="m7.247 4.86-4.796 5.481a.5.5 0 0 0 .753 1.659h9.592a.5.5 0 0 0 .753-1.659l-4.796-5.48a.5.5 0 0 0-1.506 0z" />
                        </svg>
                    </button>
                </div>

                <div className='middle'>
                    <aside>
                        <ul>
                            <li><Link to='../literature'>ادبیات</Link></li>
                            <li><Link to='../novel'>رمان</Link></li>
                            <li id='market'><Link to='../economy'>اقتصاد و مدیریت</Link></li>
                            <li><Link to='../history'>تاریخ</Link></li>
                        </ul>
                    </aside>

                    <div className='left'>
                        <div className='part'>
                            <h1>ادبیات</h1>

                            <div className='books'>
                                {literature2.map((item) => (
                                    <div className='item' key={item.id}>
                                        <img src={item.image} alt={item.title} />
                                        <h4 className='title'>{item.title}</h4>
                                        <h4>نویسنده : {item.author}</h4>
                                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                                    </div>
                                ))}

                                <Link to='../literature'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className='line'></div>

                        <div className='part'>
                            <h1>رمان</h1>

                            <div className='books'>
                                {novel2.map((item) => (
                                    <div className='item' key={item.id}>
                                        <img src={item.image} alt={item.title} />
                                        <h4 className='title'>{item.title}</h4>
                                        <h4>نویسنده : {item.author}</h4>
                                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                                    </div>
                                ))}

                                <Link to='../novel'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className='line'></div>

                        <div className='part'>
                            <h1>اقتصاد و مدیریت</h1>

                            <div className='books'>
                                {economy2.map((item) => (
                                    <div className='item' key={item.id}>
                                        <img src={item.image} alt={item.title} />
                                        <h4 className='title'>{item.title}</h4>
                                        <h4>نویسنده : {item.author}</h4>
                                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                                    </div>
                                ))}

                                <Link to='../economy'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className='line'></div>

                        <div className='part'>
                            <h1>تاریخ</h1>

                            <div className='books'>
                                {history2.map((item) => (
                                    <div className='item' key={item.id}>
                                        <img src={item.image} alt={item.title} />
                                        <h4 className='title'>{item.title}</h4>
                                        <h4>نویسنده : {item.author}</h4>
                                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                                    </div>
                                ))}

                                <Link to='../history'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className='line'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
