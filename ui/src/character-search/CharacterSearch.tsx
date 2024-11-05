import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CharacterSearchResults } from '../generated';
import { useCharacterSearch } from '../hooks/api/useCharacterSearch';
import { CharacterResultList } from './CharacterResultList';
import styles from './character-search.module.scss';

export const Home = () => {
    const { search } = useCharacterSearch();
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<CharacterSearchResults | undefined>();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const name = searchParams.get('name');
        if (name) {
            const page = Number(searchParams.get('page'));
            search(name, page).then((result) => setSearchResults(result));
        }
    }, [searchParams]);

    const handleSearch = async (event: FormEvent) => {
        event.preventDefault();
        if (searchText.trim() !== '') {
            setSearchParams({ name: searchText });
        }
    };

    const handlePageChange = (newPage: number) => {
        const allValues = searchParams.toString();
        console.log('searchParams', allValues);
        setSearchParams({ name: searchParams.get('name') ?? '', page: newPage.toString() });
    };

    return (
        <div className={styles.home}>
            <img className={styles.logo} src="thjlogo.png" alt="The Heroe's Journey logo" />
            <form className={styles.search} onSubmit={handleSearch}>
                <input
                    onChange={(event) => setSearchText(event.target.value)}
                    defaultValue={searchParams.get('name') ?? ''}
                />
                <button>Search</button>
            </form>
            {searchResults && <CharacterResultList results={searchResults} onChangePage={handlePageChange} />}
        </div>
    );
};
