function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
                <div className="p-6">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal

