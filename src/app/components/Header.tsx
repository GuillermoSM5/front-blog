const Header = () => {
    return (
        <div className="border-b border-(--border-color) backdrop-blur-sm  sticky top-0 ">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-white  opacity-80 z-0"></div>
            <div className="container  px-4 py-4 m-auto flex justify-between relative z-50" >
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