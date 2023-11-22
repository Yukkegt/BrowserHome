import React from 'react';
import logo from '@assets/img/logo.svg';
import '@pages/newtab/Newtab.css';
import '@pages/newtab/Newtab.scss';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import BookmarkCard from '@root/src/components/bookmarkCard/bookmarkCard';

const Newtab = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <div
      className="App">
        <div className='container'>
          <BookmarkCard title="Youtube" url="https://www.youtube.com/" />
          <BookmarkCard title="はてなブログ" />
          <BookmarkCard title="X" />
          <BookmarkCard title="Wantedly" />
          <BookmarkCard title="GitHub" />
          <BookmarkCard title="Amazon" />
          <BookmarkCard title="Pixiv" />

        </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Newtab, <div> Loading ... </div>), <div> Error Occur </div>);
