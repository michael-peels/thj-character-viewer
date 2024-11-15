import { useParams } from 'react-router-dom';

export const CharacterDetails = () => {
    const { id } = useParams();
    return <div>Viewing character details for: {id}</div>;
};
