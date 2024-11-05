import { FormEvent, useState } from 'react';
import { useCharacterSearch } from '../hooks/api/useCharacterSearch';
import { CharacterResultList } from './CharacterResultList';
import styles from './character-search.module.scss';

export const Home = () => {
    const { search, page, results, name } = useCharacterSearch();
    const [searchText, setSearchText] = useState('');

    const handleSearch = async (event: FormEvent) => {
        event.preventDefault();
        if (searchText.trim() !== '') {
            search(searchText);
        }
    };

    return (
        <div className={styles.home}>
            <img className={styles.logo} src="thjlogo.png" alt="The Heroe's Journey logo" />
            <form className={styles.search} onSubmit={handleSearch}>
                <input onChange={(event) => setSearchText(event.target.value)} defaultValue={name} />
                <button>Search</button>
            </form>
            {results && <CharacterResultList results={results} onChangePage={page} />}
        </div>
    );
};
