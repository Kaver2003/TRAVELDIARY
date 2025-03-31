import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Input from "../components/ UI/Input";
import Textarea from "../components/ UI/Textarea";
import FileInput from "../components/ UI/FileInput";
import RatingInput from "../components/ UI/RatingInput";
import Button from "../components/ UI/Button";
import {mockTravels} from "../data/mockTravels";


const AddTravel = ({editTravel, onSave}) => {
    const addTravel = (newTravel) => {
        const travels = JSON.parse(localStorage.getItem('travels')) || [];
        const maxId = Math.max(...[...travels, ...mockTravels].map(t => t.id), 0);
        const travelWithId = {...newTravel, id: maxId + 1};

        localStorage.setItem('travels', JSON.stringify([...travels, travelWithId]));
        navigate(`/travel/${travelWithId.id}`);
    };
    const navigate = useNavigate();

    const [form, setForm] = useState(editTravel || {
        title: '',
        location: '',
        author: 'Анонимный путешественник',
        description: '',
        cost: '',
        images: [],
        heritageSites: [''],
        placesToVisit: [''],
        ratings: {
            transport: 3,
            safety: 3,
            population: 3,
            greenery: 3
        },
        coordinates: {lat: 0, lng: 0}
    });

    const [imagePreviews, setImagePreviews] = useState([]);

    const handleInputChange = (field, value) => {
        setForm(prev => ({...prev, [field]: value}));
    };

    const handleNestedChange = (parentField, field, value) => {
        setForm(prev => ({
            ...prev,
            [parentField]: {
                ...prev[parentField],
                [field]: value
            }
        }));
    };

    const handleImageUpload = (files) => {
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(prev => [...prev, ...newPreviews]);
        setForm(prev => ({
            ...prev,
            images: [...prev.images, ...files]
        }));
    };

    const removeImage = (index) => {
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
        setForm(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const updateList = (listName, index, value) => {
        setForm(prev => {
            const newList = [...prev[listName]];
            newList[index] = value;
            return {...prev, [listName]: newList};
        });
    };

    const addListItem = (listName) => {
        setForm(prev => ({
            ...prev,
            [listName]: [...prev[listName], '']
        }));
    };

    const removeListItem = (listName, index) => {
        setForm(prev => ({
            ...prev,
            [listName]: prev[listName].filter((_, i) => i !== index)
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const cleanedForm = {
            ...form,
            heritageSites: form.heritageSites.filter(site => site.trim() !== ''),
            placesToVisit: form.placesToVisit.filter(place => place.trim() !== '')
        };


        const travels = JSON.parse(localStorage.getItem('travels')) || [];
        const newTravel = {
            ...form,
            ...cleanedForm,
            id: editTravel?.id || Date.now(),
            cost: Number(cleanedForm.cost) || 0,
            images: form.images.map(img => typeof img === 'string' ? img : URL.createObjectURL(img))
        };

        const updatedTravels = editTravel
            ? travels.map(t => t.id === editTravel.id ? newTravel : t)
            : [...travels, newTravel];

        localStorage.setItem('travels', JSON.stringify(updatedTravels));
        navigate('/');
    };

    return (
        <div className="container mx-auto px-4 pt-20 py-8 max-w-3xl">
            <h1 className="text-2xl font-bold mb-6">Добавить новое путешествие</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Название путешествия*"
                        value={form.title}
                        onChange={(value) => handleInputChange('title', value)}
                        required
                    />

                    <Input
                        label="Местоположение*"
                        value={form.location}
                        onChange={(value) => handleInputChange('location', value)}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Автор"
                        value={form.author}
                        onChange={(value) => handleInputChange('author', value)}
                    />

                    <Input
                        label="Стоимость (₽)"
                        type="number"
                        value={form.cost}
                        onChange={(value) => handleInputChange('cost', value)}
                    />
                </div>

                <Textarea
                    label="Описание путешествия*"
                    value={form.description}
                    onChange={(value) => handleInputChange('description', value)}
                    rows={4}
                    required
                />

                <div>
                    <label className="block font-medium mb-2">Фотографии</label>
                    <FileInput onChange={handleImageUpload} multiple/>

                    {imagePreviews.length > 0 && (
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-3">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={preview}
                                            alt={`Preview ${index}`}
                                            className="h-24 w-24 object-cover rounded"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <label className="block font-medium mb-2">Места культурного наследия</label>
                    {form.heritageSites.map((site, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <Input
                                value={site}
                                onChange={(value) => updateList('heritageSites', index, value)}
                                className="flex-grow"
                            />
                            {form.heritageSites.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeListItem('heritageSites', index)}
                                    className="ml-2 text-red-500 p-2"
                                >
                                    Удалить
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addListItem('heritageSites')}
                        className="text-blue-600 text-sm"
                    >
                        + Добавить место
                    </button>
                </div>

                <div>
                    <label className="block font-medium mb-2">Рекомендуемые места для посещения</label>
                    {form.placesToVisit.map((place, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <Input
                                value={place}
                                onChange={(value) => updateList('placesToVisit', index, value)}
                                className="flex-grow"
                            />
                            {form.placesToVisit.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeListItem('placesToVisit', index)}
                                    className="ml-2 text-red-500 p-2"
                                >
                                    Удалить
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addListItem('placesToVisit')}
                        className="text-blue-600 text-sm"
                    >
                        + Добавить место
                    </button>
                </div>

                <div>
                    <h3 className="font-medium mb-3">Оценки</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RatingInput
                            label="Транспорт"
                            value={form.ratings.transport}
                            onChange={(value) => handleNestedChange('ratings', 'transport', value)}
                        />
                        <RatingInput
                            label="Безопасность"
                            value={form.ratings.safety}
                            onChange={(value) => handleNestedChange('ratings', 'safety', value)}
                        />
                        <RatingInput
                            label="Населённость"
                            value={form.ratings.population}
                            onChange={(value) => handleNestedChange('ratings', 'population', value)}
                        />
                        <RatingInput
                            label="Зелёные зоны"
                            value={form.ratings.greenery}
                            onChange={(value) => handleNestedChange('ratings', 'greenery', value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Широта"
                        type="number"
                        value={form.coordinates.lat}
                        onChange={(value) => handleNestedChange('coordinates', 'lat', parseFloat(value) || 0)}
                    />
                    <Input
                        label="Долгота"
                        type="number"
                        value={form.coordinates.lng}
                        onChange={(value) => handleNestedChange('coordinates', 'lng', parseFloat(value) || 0)}
                    />
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate('/')}
                    >
                        Отмена
                    </Button>
                    <Button type="submit">
                        Сохранить путешествие
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddTravel;