import '@components/treeView/treeView.css';

interface FaviconProps {
    title: string;
    url: string;
  }

const Favicon: React.FC<FaviconProps> = ({ url,title }) => {  

    return (
        <img src={"https://www.google.com/s2/favicons?domain=" + url} title={title} ></img>

)};

export default Favicon;
