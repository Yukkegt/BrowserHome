import '@components/bookmarkCard/bookmarkCard.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { FaPen, FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';

const BookmarkCard = (props: any) => {
  const [isNewCard, setNewCardMode] = useState(true);
  // const [title, setTitle] = useState("");
  // const [url, setURL] = useState("");

  const NewCardInput = (_title: string, _url: string) => {
    return (
      <div className='bookmark-text'>
        {/* <input placeholder='タイトル' className='bookmark-title'>
          {_title}
        </input> */}
        {/* <input placeholder='url'>{_url}</input> */}
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
        {isNewCard ? NewCardInput(props.title, props.url) : CardText(props.title,props.url)
        }
        <FaPen size={'16px'}/>
      </div>
      <div className='bookmark-allow'>
        <FaArrowRightLong />
      </div>
    </div>
)};

export default BookmarkCard;
