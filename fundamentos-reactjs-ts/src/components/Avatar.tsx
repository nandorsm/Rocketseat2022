import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar( { src, hasBorder=true, alt }: AvatarProps ){
    return(
        <img
            src={src}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            alt={alt}
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