const Header = () => {
    return (
        <div className="border-b border-(--border-color) sticky top-0 bg-white ">
            <div className="container  px-4 py-4 m-auto flex justify-between" >
                <div className="flex">
                    <div>
                        <div className="bg-[#2563EB] rounded-[100%] w-[3rem] h-[3rem] flex justify-center items-center">
                            <p className="m-0">B</p>
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="font-bold text-lg ">Entre Nosotros</p>
                        <p className="text-sm text-(--secondary-color)">Escrito por amigos, para lectores. Conoce nuestras historias y pasiones.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <ul className="flex text-sm font-bold text-(--menu-color)">
                        <p>
                            Home
                        </p>
                        <p className="ml-4">
                            Autores
                        </p>
                        <p className="ml-4">
                            Categorias
                        </p>
                        <p className="ml-4">
                            Acerda de
                        </p>
                        <p className="ml-4">
                            Contacto
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;