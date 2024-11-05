import { useEffect, useState } from 'react';
import { CharacterSearchResults, SearchControllerService } from '../../generated';
import { useSearchParams } from 'react-router-dom';

const PAGE_SIZE = 25;
export const useCharacterSearch = () => {
    const [results, setResults] = useState<CharacterSearchResults | undefined>();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const name = searchParams.get('name');
        const page = Number(searchParams.get('page'));
        if (name && name.trim() !== '') {
            performSearch(name, page);
        }
    }, [searchParams]);

    const performSearch = async (searchString: string, page: number = 0) => {
        setResults(await SearchControllerService.findCharacters({ name: searchString, page, size: PAGE_SIZE }));
    };

    const search = async (searchString: string, page: number = 0) => {
        setSearchParams({ name: searchString, page: page.toString() });
    };

    const page = (page: number) => {
        search(searchParams.get('name') ?? '', page);
    };

    return { search, page, results, name: searchParams.get('name') ?? '' };
};
