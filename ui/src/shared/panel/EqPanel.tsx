import { ReactNode } from 'react';
import styles from './panel.module.scss';
import classNames from 'classnames';

type Props = {
    title: string;
    children: ReactNode | ReactNode[];
    className?: string;
};
export const EqPanel = ({ title, children, className }: Props) => {
    return (
        <section className={classNames(styles.panel, className)}>
            <div className={styles.tableHeader}>
                <div className={styles.tableHeaderLeft} />
                <div className={styles.tableHeaderMiddle}>{title}</div>
                <div className={styles.tableHeaderRight} />
            </div>
            <div className={styles.innerBorder}>
                <div className={styles.contentWrapper}>{children}</div>
            </div>
        </section>
    );
};
