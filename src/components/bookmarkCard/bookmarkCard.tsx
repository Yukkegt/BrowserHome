import '@components/bookmarkCard/bookmarkCard.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { FaPen, FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
import Favicon from '../favicon';

interface BookmarkCardProps {
  propTitle: string,
  propUrl:string
}

const BookmarkCard: React.FC<BookmarkCardProps> = ({propTitle, propUrl}) => {
  const [isNewCard, setNewCardMode] = useState(false);
  const [title, setTitle] = useState(propTitle);
  const [url, setURL] = useState(propUrl);
  const onInputTitleChanged = (e) => setTitle(e.target.value);
  const onInputURLChanged = (e) => setURL(e.target.value);

  const NewCardInput = (_title: string, _url: string) => {
    return (
      <div className='bookmark-text'>
        <input type='text' placeholder='タイトル' className='bookmark-input' value={_title} onChange={onInputTitleChanged} />
        <input type='url' placeholder='url' className='bookmark-input' value={_url} onChange={onInputURLChanged} />
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
      <a href={url}>
        <div className='bookmark-content'>
          <Favicon className='bookmark-img' title={title} src={url} />
          {isNewCard ? NewCardInput(title, url) : CardText(title,url)}
        </div>
      </a>
      <div className='bookmark-menu'>
        <button type='button' title='a' className='bookmark-update' onClick={() => setNewCardMode(!isNewCard)}>
          <FaPen size={'16px'}/>        
        </button>
        <div className='bookmark-allow'>
          <FaArrowRightLong />
        </div>

      </div>
    </div>
   
)};

export default BookmarkCard;
