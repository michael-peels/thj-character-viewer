import { CharacterSearchResults } from '../generated';

type Props = {
    results: CharacterSearchResults;
    onChangePage: (newPage: number) => void;
};
export const CharacterResultList = ({ results, onChangePage }: Props) => {
    return (
        <div>
            <div>Total results: {results?.totalResults}</div>
            <ul>
                {results?.searchResults?.map((r, k) => (
                    <li key={k}>
                        {r.name} - {r.level} - {r.playerClass}
                    </li>
                ))}
                {results.totalResults && results.totalResults > 0 && (
                    <button onClick={() => onChangePage(1)}>Go to page</button>
                )}
            </ul>
        </div>
    );
};
