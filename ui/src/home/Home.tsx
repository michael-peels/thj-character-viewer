import { useNavigate } from 'react-router-dom';
import styles from './home.module.scss';
export const Home = () => {
    const nav = useNavigate();
    return (
        <div className={styles.home}>
            <div className={styles.buttonList}>
                <button onClick={() => nav({ pathname: 'characters' })}>Character Search</button>
                <button onClick={() => nav({ pathname: 'bazaar' })}>Bazaar Search</button>
            </div>
        </div>
    );
};
