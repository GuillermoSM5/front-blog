import ButtonPB from "./ButtonPB";

const Subscription = () => {
    return (
        <div className="bg-[#F7F7F7] text-center py-8">
            <h2 className="text-2xl font-black mb-4">Mantente actualizado</h2>
            <p className="w-[50%] text-(--secondary-color) font-medium  m-auto">Recibe notificaciones cuando publique nuevos tutoriales de fotografía, historias de viajes y contenido detrás de cámaras.</p>
            <div className="flex justify-center mt-8">
                <ButtonPB text="Subscribete" />
            </div>
        </div>
    );
}

export default Subscription;