interface Bookmark {
    title: string,
    url: string,
}

interface BookmarkData {
    bookmarks: Bookmark[] 
}

const bookmarkData: BookmarkData;

export default bookmarkData;
