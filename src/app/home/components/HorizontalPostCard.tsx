import Tag from "@/app/components/Tag";

const HorizontalPostCard = () => {

    const tags = ['Web Develoment', 'Next.js', 'Next.js', 'Next.js', 'Next.js']

    return (
        <div className="border border-(--border-color) w-sm px-6 rounded-2xl">
            <div></div>
            <div className="py-6 ">
                <div className="flex [&>*]:mr-2 [&>*]:mb-2 flex-wrap">
                    {
                        tags.map((text, index) => <Tag text={text} key={index} />)
                    }
                </div>
                <p>
                    Building Scalable Web Applications with Next.js and TypeScript
                </p>
            </div>
        </div>
    );
}

export default HorizontalPostCard;