import { CharacterSummary } from '../../generated';

type Props = {
    summary: CharacterSummary;
};
export const CharacterListEntry = ({ summary }: Props) => {
    return (
        <tr>
            <td>{summary.name}</td>
            <td>{summary.level}</td>
            <td>{summary.playerClass}</td>
        </tr>
    );
};
