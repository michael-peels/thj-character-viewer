import { PAGE_SIZE } from '../../hooks/api/useCharacterSearch';
import styles from './pagination.module.scss';

type Props = {
    currentPage?: number;
    totalResults?: number;
    onChangePage: (page: number) => void;
};
export const Pagination = ({ currentPage, totalResults, onChangePage }: Props) => {
    const renderPrevousPages = () => {
        if (currentPage !== undefined && currentPage > 1) {
            return <button onClick={() => onChangePage(currentPage - 1)}>{currentPage - 1}</button>;
        }
        return <></>;
    };

    const renderNextPages = () => {
        if (totalResults && currentPage && currentPage * PAGE_SIZE < totalResults) {
            return <button>{currentPage + 1}</button>;
        }
        return <></>;
    };

    return (
        <>
            {totalResults !== undefined && totalResults > PAGE_SIZE && (
                <div className={styles.pagination}>
                    {renderPrevousPages()}
                    {<button disabled>{currentPage}</button>}
                    {renderNextPages()}
                </div>
            )}
        </>
    );
};
