import '@pages/newtab/Newtab.css';
import '@pages/newtab/Newtab.scss';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import BookmarkCard from '@root/src/components/bookmarkCard/bookmarkCard';
import TreeView from '@root/src/components/treeView/treeView';
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import bookmarkData from '../../shared/jsonStorages/bookmark';

const Newtab = () => {
  const [bookmarks, setBookmarks] = useState(bookmarkData);  

  return (
    <div className="App">
      <div className='container'>
      <button type='button' title='add-bookmark' className='add-button' >
        <FaPlus/>
      </button>

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
