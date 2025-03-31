import {useState} from "react";
import Input from "../ UI/Input";
import Button from "../ UI/Button";
import Textarea from "../ UI/Textarea";
import FileInput from "../ UI/FileInput";

function TravelForm({initialData, onSubmit}) {
    const [location, setLocation] = useState(initialData?.location || '');
    const [images, setImages] = useState(initialData?.images || []);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);

    };

    const handleGetLocation = () => {
        navigator.geolocation.getCurrentPosition(pos => {

        });
    };

    return (
        <form onSubmit={onSubmit}>

            <Input name="title" label="Название" required/>
            <Textarea name="description" label="Описание"/>

            <div className="flex items-end gap-2">
                <Input name="location" label="Местоположение" value={location} onChange={setLocation}/>
                <Button type="button" onClick={handleGetLocation}>Определить автоматически</Button>
            </div>

            <FileInput label="Фотографии" onChange={handleImageUpload} multiple/>
            <div className="flex gap-2 flex-wrap">
                {images.map((img, index) => (
                    <img key={index} src={img} className="h-20 w-20 object-cover"/>
                ))}
            </div>

            <Input name="cost" type="number" label="Общая стоимость (₽)"/>

            <Button type="submit">Сохранить</Button>
        </form>
    );
};

export default TravelForm;