import Tag from "@/app/components/Tag";
import Image from "next/image";
import { MdAccessTime, MdArrowForward, MdCalendarToday } from "react-icons/md";
import PlaceHolderImage from '../../../../public/images/disparo-vertical-de-un-rio-rodeado-por-montanas-y-prados-en-escocia.jpg'

const HorizontalPostCard = () => {

    const tags = ['Web Develoment', 'Next.js']

    return (
        <div className="border border-(--border-color)   rounded-2xl">
            <div className="h-60 overflow-hidden">
                <Image src={PlaceHolderImage} alt="Placeholder image" height={800} className="rounded-t-2xl" style={{ objectFit: 'cover' }} />
            </div>
            <div className="py-6 px-6">
                <div className="flex [&>*]:mr-2 [&>*]:mb-2 flex-wrap">
                    {
                        tags.map((text, index) => <Tag text={text} key={index} />)
                    }
                </div>
                <p className="mt-2 font-bold">
                    Building Scalable Web Applications with Next.js and TypeScript
                </p>
                <p className="mt-3 text-(--secondary-color) text-sm w-[80%]">
                    Modern web development requires robust tooling and frameworks. Here's how Next.js 14 and TypeScript create the ...
                </p>
                <div className="flex items-center mt-4">
                    <div className="bg-(--border-color) w-8 h-8 rounded-full">
                    </div>
                    <div className="ml-4">
                        <p className="text-xs font-bold">John Doe</p>
                        <p className="text-xs font-bold text text-(--secondary-color)">Travel Photographer</p>
                    </div>
                </div>
                <div className="flex mt-4 mb-4 text-xs font-medium text-(--secondary-color) [&>*]:mr-4">
                    <div className="flex items-center ">
                        <MdCalendarToday className="mr-1" />
                        <p>March 15, 2024</p>
                    </div>
                    <div className="flex items-center ">
                        <MdAccessTime className="mr-1" />
                        <p>8 min read</p>
                    </div>
                </div>
                <div className="text-sm font-bold mt-4 flex items-center justify-between">
                    <p>Read More</p>
                    <MdArrowForward className="text-lg" />
                </div>
            </div>
        </div>
    );
}

export default HorizontalPostCard;