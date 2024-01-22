/* eslint-disable react/prop-types */
import './bookmark.css'

const Bookmark = ({ bookmark, readBook }) => {
    let totaltime = 0;
    let totalquantity = 0;
    for (const reactive of bookmark) {
        totaltime = parseInt(totaltime) + parseInt(reactive.time);
    }

    for (const book of readBook) {
        book.quantity = book.quantity || 1;
        totalquantity = totalquantity + book.quantity;
    }
    return (
        <div>
            <h1 className="read-section">Spent time on read : {totaltime} min</h1>
            <div className='bookmark'>
                <h2>Bookmarked Blogs : {totalquantity}</h2>
                <div className='readbook-div'>
                    {
                        readBook.map(read => < >
                            <p className='readbook'>{read.title}</p>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmark;