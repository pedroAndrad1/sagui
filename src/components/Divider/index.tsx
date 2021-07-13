import styles from './divider.module.scss';

type DividerProps = {
    direction: 'horizontal' | 'vertical';
}

export default function Divider({direction = 'horizontal'}: DividerProps){
    if(direction == 'horizontal'){
        return(
            <span className={styles.divider_horizontal} />
        )
    }
    else{
        return(
            <span className={styles.divider_vertical} />
        )
    }
    
};

