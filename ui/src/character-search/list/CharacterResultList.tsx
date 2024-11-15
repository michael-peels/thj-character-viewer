import { CharacterSearchResults } from '../../generated';
import { Table } from '../../shared/table/Table';
import { CharacterListEntry } from './CharacterListEntry';

type Props = {
    results: CharacterSearchResults;
    onChangePage: (newPage: number) => void;
    currentPage?: number;
};
export const CharacterResultList = ({ results, currentPage, onChangePage }: Props) => {
    return (
        <Table
            headers={['Name', 'Level', 'Class']}
            rows={results?.searchResults?.map((s, k) => (
                <CharacterListEntry key={k} summary={s} />
            ))}
            totalResults={results.totalResults ?? 1}
            onChangePage={onChangePage}
            currentPage={currentPage}
        />
    );
};
