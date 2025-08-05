import Image from "next/image";

export default function Home() {
  return (
    <div className=" container m-auto text-center">
      <h1 className="font-bold text-5xl mt-11 mb-6">Comunidad de Creadores</h1>
      <div className="w-[65%] m-auto">
        <p className="text-(--secondary-color) font-bold text-lg">Una colección de historias, tutoriales e ideas de apasionados creadores en diversos campos. Desde la tecnología hasta el arte, la sostenibilidad y la cocina. Descubre nuevas perspectivas.</p>
      </div>
    </div>
  );
}
