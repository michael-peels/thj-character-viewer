import { NavLink } from 'react-router-dom';
import { CharacterSummary } from '../../generated';
import styles from './character-list-entry.module.scss';

type Props = {
    summary: CharacterSummary;
};
export const CharacterListEntry = ({ summary }: Props) => {
    return (
        <tr className={styles.characterListEntry}>
            <td>
                <NavLink to={`/characters/${summary.id}`}>{summary.name}</NavLink>
            </td>
            <td>{summary.level}</td>
            <td>{summary.playerClass}</td>
        </tr>
    );
};
