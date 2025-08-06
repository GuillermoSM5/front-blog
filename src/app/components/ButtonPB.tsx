import { Linefont } from "next/font/google";
import Link from "next/link";

interface ButtonPBProps {
    text: string
}

const ButtonPB = ({ text }: ButtonPBProps) => {
    return (
        <div className="bg-black text-white px-3 py-2 w-fit rounded-lg text-sm font-semibold">
            {text}
        </div>
    );
}

export default ButtonPB;