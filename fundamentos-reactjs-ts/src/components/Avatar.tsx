import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
    // src: string;
    // alt?: string;
    // title?: string; //não precisa, pois já vem pelo ImgHTMLAttributes
}


export function Avatar( { hasBorder=true, ...props }: AvatarProps ){
    console.log(props)
    return(
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props} //spread operator busca todas as propriedades do pros do ImgHTMLAttributes
            // src={src}
            // alt={alt}
            // title={title}
        />
    );
}




// // Com props
// export function Avatar(props) {
//     const hasBorder = props.hasBorder != false;
//     return (
//         <img 
//             className={hasBorder ?  styles.avatarWithBorder : styles.avatar} 
//             src={props.src}
//         />
        
//     );
// } 



//"https://github.com/nandorsm.png"