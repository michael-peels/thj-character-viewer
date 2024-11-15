import { ReactNode } from 'react';
import { EqPanel } from '../panel/EqPanel';
import { Pagination } from './Pagination';
import styles from './table.module.scss';

type Props = {
    headers: string[];
    rows: ReactNode | ReactNode[];
    currentPage?: number;
    totalResults?: number;
    onChangePage: (page: number) => void;
};
export const Table = ({ headers, rows, currentPage, totalResults, onChangePage }: Props) => {
    return (
        <EqPanel title="Results">
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headers.map((h, k) => (
                            <th key={k}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            <Pagination onChangePage={onChangePage} currentPage={currentPage} totalResults={totalResults} />
        </EqPanel>
    );
};
