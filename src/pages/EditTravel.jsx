import { useParams } from 'react-router-dom';
import AddTravel from './AddTravel';

const EditTravel = () => {
    const { id } = useParams();
    const travels = JSON.parse(localStorage.getItem('travels')) || [];
    const travelToEdit = travels.find(t => t.id === Number(id));

    return <AddTravel editTravel={travelToEdit} />;
};

export default EditTravel;