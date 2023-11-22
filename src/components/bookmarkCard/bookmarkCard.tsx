import '@components/bookmarkCard/bookmarkCard.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { FaPen } from "react-icons/fa6";

const BookmarkCard = (props:any) => {

  return (
    <div className='bookmark-card'>
      <div className='bookmark-content'>
        <img className='bookmark-img'></img>
        <div className='bookmark-text'>
          <div className='bookmark-title'>
            {props.title}
          </div>
          <p>{props.url}</p>
        </div>
        <FaPen color='dfdfdf' size={'24px'}/>
      </div>
      
    </div>
)};

export default withErrorBoundary(withSuspense(BookmarkCard, <div> Loading ... </div>), <BookmarkCard title="Error"/>);
