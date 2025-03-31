const Footer = () => {
    return (
        <footer className="bg-gray-200 bg-opacity-50 shadow-md mt-8 p-6 border-t">
            <div className=" text-center text-gray-500">
                <p>© {new Date().getFullYear()} TravelDiary. Все права защищены.</p>
            </div>

        </footer>
    );
};

export default Footer;