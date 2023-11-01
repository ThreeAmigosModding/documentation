import styleSheet from "./linkedimage.module.css"

const LinkedImage = ({ href, src, alt, href2, src2, alt2 }) => (
    <div>
        <a href={href} target="_blank" className={styleSheet.imageLink}>
            <img src={src} alt={alt} className={styleSheet.image} />
        </a>
    </div>
);

export default LinkedImage;