import styles from './Avatar.module.css';


export function Avatar( { src, hasBorder=true } ){
    return(
        <img
            src={src}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
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