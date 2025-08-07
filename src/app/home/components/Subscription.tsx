import InputPB from "@/app/components/InputPB";
import ButtonPB from "../../components/ButtonPB";

const Subscription = () => {
    return (
        <div className="bg-[#F7F7F7] text-center py-8 mb-16">
            <h2 className="text-2xl font-black mb-4">Mantente actualizado</h2>
            <p className="w-[50%] text-(--secondary-color) font-medium  m-auto">Recibe notificaciones cuando publique nuevos tutoriales de fotografía, historias de viajes y contenido detrás de cámaras.</p>
            <div className="flex justify-center mt-8 w-[45%] m-auto [&>*]:mr-4">
                <InputPB />
                <ButtonPB text="Subscribete" />
            </div>
            <p className="mt-3  text-xs text-(--secondary-color)">No spam, unsubscribe at any time.</p>
        </div>
    );
}

export default Subscription;