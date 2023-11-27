import '@components/bookmarkCard/bookmarkCard.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { FaPen, FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';

const BookmarkCard = (props: any) => {
  const [isNewCard, setNewCardMode] = useState(true);
  const [title, setTitle] = useState(props.title);
  const [url, setURL] = useState(props.url);
  const onInputTitleChanged = (e) => setTitle(e.target.value);
  const onInputURLChanged = (e) => setURL(e.target.value);

  const NewCardInput = (_title: string, _url: string) => {
    return (
      <div className='bookmark-text'>
        <input type='text' placeholder='タイトル' className='bookmark-title' value={_title} onChange={onInputTitleChanged} />
        <input type='url' placeholder='url' value={_url} onChange={onInputURLChanged} />
      </div>    
    );
  }

  const CardText = (_title: string, _url: string) => {
    return (
      <div className='bookmark-text'>
        <div className='bookmark-title'>
          {_title}
        </div>
        <p>{_url}</p>
      </div>
    );
  }

  return (
    <div className='bookmark-card'>
      <div className='bookmark-content'>
        <img title='bookmark-img' className='bookmark-img'></img>
        {isNewCard ? NewCardInput(title, url) : CardText(title,url)
        }
        <FaPen size={'16px'}/>
      </div>
      <div className='bookmark-allow'>
        <FaArrowRightLong />
      </div>
    </div>
)};

export default BookmarkCard;
