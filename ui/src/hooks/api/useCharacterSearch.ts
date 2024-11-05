import { CharacterSearchResults, SearchControllerService } from '../../generated';

const PAGE_SIZE = 25;
export const useCharacterSearch = () => {
    const search = async (searchString: string, page: number = 0): Promise<CharacterSearchResults> => {
        return await SearchControllerService.findCharacters({ name: searchString, page, size: PAGE_SIZE });
    };

    return { search };
};
