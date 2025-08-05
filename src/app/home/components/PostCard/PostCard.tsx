import Tag from "@/app/components/Tag";

const PostCard = () => {

    const arrayTags = ['Photography', 'Travel', 'Digital Art']

    return (
        <>
            <div className="container border border-(--border-color) flex">
                <div className="flex-3/6"></div>
                <div className="flex-3/6">
                    <div className="flex items-center py-4">
                        <div className="bg-(--border-color) w-10 h-10 rounded-full">
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-bold">John Doe</p>
                            <p className="text-sm font-bold text text-(--secondary-color)">Travel Photographer</p>
                        </div>
                    </div>
                    <div className="flex [&>*]:mr-2 mb-3">
                        {
                            arrayTags.map((text, index) => <Tag text={text} key={index} />)
                        }
                    </div>
                    <div>
                        <p className="text-2xl font-black w-[80%]">
                            My Journey Through Digital Photography: Capturing Life's Moments
                        </p>
                    </div>
                    <p className="mt-4 text-(--secondary-color) font-semibold w-[90%]">
                        Photography has always been more than just a hobby for me—it's a way to freeze time, capture emotions, and tell stories that words sometimes can't express.
                    </p>
                </div>
            </div>
        </>
    );
}

export default PostCard;