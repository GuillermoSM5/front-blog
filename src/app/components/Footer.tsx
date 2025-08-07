const Footer = () => {
    return (
        <>
            <div className="border-t border-b border-(--border-color) grid grid-cols-4 py-6">
                <div className="px-4">
                    <div className="flex items-center">
                        <div className="bg-[#2563EB] rounded-[100%] w-[2rem] h-[2rem] flex justify-center items-center mr-3">
                            <p className="m-0 text-white">B</p>
                        </div>
                        <p className="font-bold text-sm ">Entre Nosotros</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-(--secondary-color)">Escrito por amigos, para lectores. Conoce nuestras historias y pasiones.</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold">Categorias</h2>
                    <div className="mt-4 text-sm [&>*]:mb-2 text-(--secondary-color)">
                        <p>Photography</p>
                        <p>Travel</p>
                        <p>Tutorials</p>
                        <p>Gear Reviews</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold">Quick Links</h2>
                    <div className="mt-4 text-sm [&>*]:mb-2 text-(--secondary-color)">
                        <p>Acerca de</p>
                        <p>Portafolio</p>
                        <p>Contacto</p>
                        <p>Politica de Privacidad</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold">Contacto</h2>
                    <div className="mt-4 text-sm [&>*]:mb-2 text-(--secondary-color)">
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Youtube</p>
                        <p>email </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-8 text-sm text-(--secondary-color)">
                <p>© 2024 Guillermo Soto. All rights reserved.</p>
            </div>
        </>
    );
}

export default Footer;