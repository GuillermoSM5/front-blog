import ButtonLMA from "@/app/components/ButtonLMA";
import HorizontalPostCard from "./HorizontalPostCard";

const AllArticles = () => {

    const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    console.log(miArray.length)

    return (
        <div className="container m-auto mt-12 mb-12">
            <h2 className="font-black text-2xl mb-8">Ultimos Articulos</h2>
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4" >
                {
                    miArray.map((index) => <HorizontalPostCard key={index} />)
                }
            </div>
            <div className="flex justify-center mt-16">
                <ButtonLMA />
            </div>
        </div>
    );
}

export default AllArticles;