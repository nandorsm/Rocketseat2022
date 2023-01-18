import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}



export function Comment( { content, onDeleteComment }: CommentProps ) {

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment() {
        console.log('deletar')
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/nandorsm.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fernando Caetano</strong>
                            <time title='26 de Dezembro às 22:24h' dateTime='2022-12-26 22:24:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                {/* onClick={() => setAplaudir(aplaudir + 1)} */}
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    );
}