import '@components/treeView/treeView.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { FaFolder } from "react-icons/fa6";
import { useState } from 'react';
import { useEffect } from 'react';
import TreeViewItem from './treeViewItem';

interface BookmarkProps {
    bookmark: chrome.bookmarks.BookmarkTreeNode;
  }

const isFolder = (bookmark: chrome.bookmarks.BookmarkTreeNode) => {
  if (bookmark.children) {
    return (<TreeViewFolder bookmark={bookmark} />);
  }else{
    return (<TreeViewItem bookmark={bookmark} />);
  }
}

const TreeViewFolder: React.FC<BookmarkProps> = ({ bookmark }) => {  
  return (

      <details className='tree-folder-container'>        
        <summary className='tree-folder'>
          <FaFolder size={'16px'} />
          <div className='tree-item-text'>
            {bookmark.title}
          </div>
        </summary>
        {bookmark.children.map((item) => (
          isFolder(item)
          ))}
      </details>
)};

export default TreeViewFolder;
