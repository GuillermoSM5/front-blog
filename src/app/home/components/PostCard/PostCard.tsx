const PostCard = () => {
    return (
        <>
            <div className="container border border-(--border-color) flex">
                <div className="flex-3/6"></div>
                <div className="flex-3/6">
                    <div className="flex items-center p-4">
                        <div className="bg-(--border-color) w-8 h-8 rounded-full">
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-bold">John Doe</p>
                            <p className="text-sm font-bold text text-(--secondary-color)">Travel Photographer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCard;