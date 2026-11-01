
import { useLocation, Link } from 'react-router-dom';
import './search.css'
export default function SearchResults() {
    const location = useLocation();

    const results = location.state?.results || [];
    const search = location.state?.search || "";

    return (
        <div className="searchResults">
           <div className='topic'>
            <h1>نتایج جست‌وجو</h1>

            <p>عبارت جست‌وجو: {search}</p>
        </div>
            {results.length > 0 ? (
                <div className="books">
                    {results.map((item) => (
                        <div className="item" key={item.id}>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />
                            )}

                            <h3>{item.title}</h3>

                            {item.author && (
                                <p>نویسنده: {item.author}</p>
                            )}

                            {item.speaker && (
                                <p>گوینده: {item.speaker}</p>
                            )}

                            <Link to={`/article/${item.id}`}>
                                بیشتر
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>نتیجه‌ای برای این جست‌وجو پیدا نشد.</p>
            )}

           <div className='back'> <Link to="/">بازگشت به صفحه اصلی</Link></div>
            </div>
    );
}
