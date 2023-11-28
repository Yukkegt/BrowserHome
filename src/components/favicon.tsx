import '@components/treeView/treeView.css';

type FaviconProps = JSX.IntrinsicElements['img'] & {
  className?: string;
}

const Favicon: React.FC<FaviconProps> = ({ className, ...rest }) => {  

    return (
        <img src={"https://www.google.com/s2/favicons?domain=" + rest.src} title={rest.title} className={className}></img>

)};

export default Favicon;
