import '@pages/newtab/Newtab.css';
import '@pages/newtab/Newtab.scss';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import BookmarkCard from '@root/src/components/bookmarkCard/bookmarkCard';
import TreeView from '@root/src/components/treeView/treeView';
import { FaPlus } from "react-icons/fa6";

const Newtab = () => {
 
  return (
    <div className="App">
      <div className='container'>
      <button className='add-button' >
        <FaPlus/>
      </button>

      </div>
        <div className='container grid'>
          <BookmarkCard title="Youtube" url="https://www.youtube.com/" />
          <BookmarkCard title="はてなブログ" />
          <BookmarkCard title="X" />
          <BookmarkCard title="Wantedly" />
          <BookmarkCard title="GitHub" />
          <BookmarkCard title="Amazon" />
          <BookmarkCard title="Pixiv" />

        </div>
        <div className='container'>          
            <TreeView />          
        </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Newtab, <div> Loading ... </div>), <div> Error Occur </div>);
