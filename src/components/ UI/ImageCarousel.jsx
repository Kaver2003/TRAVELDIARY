import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Travel ${index + 1}`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}

            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all"
            >
                <FiChevronLeft className="text-gray-800" />
            </button>

            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all"
            >
                <FiChevronRight className="text-gray-800" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;