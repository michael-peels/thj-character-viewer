import { FormEvent, useState } from 'react';
import { useCharacterSearch } from '../hooks/api/useCharacterSearch';
import { CharacterResultList } from './list/CharacterResultList';
import styles from './character-search.module.scss';

export const CharacterSearch = () => {
    const { search, page, results, name, currentPage } = useCharacterSearch();
    const [searchText, setSearchText] = useState('');

    const handleSearch = async (event: FormEvent) => {
        event.preventDefault();
        if (searchText.trim() !== '') {
            search(searchText);
        }
    };

    return (
        <>
            <form className={styles.search} onSubmit={handleSearch}>
                <input onChange={(event) => setSearchText(event.target.value)} defaultValue={name} />
                <button>Search</button>
            </form>
            <div className={styles.searchResults}>
                {results && <CharacterResultList results={results} onChangePage={page} currentPage={currentPage} />}
            </div>
        </>
    );
};
