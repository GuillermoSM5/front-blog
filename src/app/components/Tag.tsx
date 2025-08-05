interface TagProps {
    text: string
}

const Tag = ({ text }: TagProps) => {
    return (
        <div className="text-xs text-(--tag-text) font-bold py-[2px] px-2.5 bg-(--bg-tag) rounded-full w-fit">
            <p>{text}</p>
        </div>
    );
}

export default Tag; 