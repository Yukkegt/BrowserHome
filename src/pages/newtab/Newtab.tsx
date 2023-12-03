import '@pages/newtab/Newtab.css';
import '@pages/newtab/Newtab.scss';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import BookmarkCard from '@root/src/components/bookmarkCard/bookmarkCard';
import TreeView from '@root/src/components/treeView/treeView';
import { FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import bookmarkData from '../../shared/jsonStorages/bookmark';

const Newtab = () => {
  const [bookmarks, setBookmarks] = useState(bookmarkData);  
  const [isAddMode, setAddMode] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newURL, setURL] = useState("");
  const onInputTitleChanged = (e) => setNewTitle(e.target.value);
  const onInputURLChanged = (e) => setURL(e.target.value);

  function submitBookmark(event) {
    event.preventDefault();
    console.log(newTitle);
    console.log(newURL);
  }

  return (
    <div className="App">
      <div className='container'>
        <form className='add-button-area' onSubmit={submitBookmark}>
          <button type='button' title='ブックマークを追加' className={`add-button ${isAddMode ? 'active' : ''}`} onClick={() => setAddMode(!isAddMode)} >
            <FaPlus className='add-bookmark-icon'/>
          </button>
          {isAddMode ? 
            <>
              <input className='add-bookmark-input fade-down' title='タイトル' placeholder='タイトル' value={newTitle} onChange={onInputTitleChanged}></input>
              <input className='add-bookmark-input fade-down' title='URL' placeholder='URL' value={newURL} onChange={onInputURLChanged}></input>
              <button type='submit' className='submit-allow fade-down' title='ブックマークを登録'>
                <FaArrowRightLong />
              </button>
            </>
            :<></>          
          }
        </form>
      </div>
      <div className='container grid'>
        {bookmarks.bookmarks.map((bookmark) => (
          <BookmarkCard propTitle={bookmark.title} propUrl={bookmark.url} />            
        ))}
      </div>
      <div className='container'>          
          <TreeView />          
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Newtab, <div> Loading ... </div>), <div> Error Occur </div>);
