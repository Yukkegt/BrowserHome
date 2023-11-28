import '@components/treeView/treeView.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { FaFolder } from "react-icons/fa6";
import { useState } from 'react';
import TreeViewFolder from './treeViewFolder';
import { useEffect } from 'react';

interface BookmarkProps {
    bookmark: chrome.bookmarks.BookmarkTreeNode;
  }

const TreeView = () => {  
  const [bookmarks, setBookmarks] = useState<chrome.bookmarks.BookmarkTreeNode[]>([]);

  useEffect(() => {
    // ブックマークを取得
    chrome.bookmarks.getTree((items) => {
      setBookmarks(items[0].children);
    });
  }, []);
  
  return (
    <div className=''>
      {bookmarks.map((bookmark) => (
            <TreeViewFolder bookmark={bookmark} />
        ))}
    </div>
)};

export default TreeView;
