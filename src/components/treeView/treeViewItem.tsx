import '@components/treeView/treeView.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { FaFolder } from "react-icons/fa6";
import { useState } from 'react';
import { useEffect } from 'react';
import Favicon from '../favicon';

interface BookmarkProps {
    bookmark: chrome.bookmarks.BookmarkTreeNode;
  }

const TreeViewItem: React.FC<BookmarkProps> = ({ bookmark }) => {  
  const [bookmarks, setBookmarks] = useState<chrome.bookmarks.BookmarkTreeNode[]>([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // ブックマークを取得    
    setBookmarks(bookmark.children);
  }, []);

  return (
          <a className='tree-item' href={bookmark.url}>
          <Favicon title={bookmark.title} src={bookmark.url}/>
            <div className='tree-item-text'>
              {bookmark.title}
            </div>
          </a>
)};

export default TreeViewItem;
