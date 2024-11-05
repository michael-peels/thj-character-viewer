import { Outlet, useNavigate } from 'react-router-dom';
import styles from './layout.module.scss';

export const Layout = () => {
    const nav = useNavigate();
    return (
        <div className={styles.layout}>
            <img
                className={styles.logo}
                onClick={() => nav({ pathname: '/' })}
                src="thjlogo.png"
                alt="The Heroe's Journey logo"
            />
            <Outlet />
        </div>
    );
};
