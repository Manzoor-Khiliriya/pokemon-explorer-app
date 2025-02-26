import { PokemonDetailCardProps } from "@/utils/types";
import Image from "next/image";

export default function PokemonDetailCard({
    name,
    images,
    abilities,
    types,
    stats,
    moves,
}: PokemonDetailCardProps) {
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
            <h1 className="text-4xl font-bold text-center capitalize">{name}</h1>

            <div className="flex justify-center gap-4">
                {images?.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`${name} ${index === 0 ? "Front" : "Back"}`}
                        width={160}
                        height={160}
                        className="w-40 h-40"
                        priority
                    />
                ))}
            </div>

            {[
                { title: "Abilities", data: abilities },
                { title: "Types", data: types },
                { title: "Stats", data: stats },
                { title: "Moves", data: moves },
            ].map(({ title, data }) => (
                data?.length > 0 && ( 
                    <div key={title} className="bg-red-200 p-2 rounded-lg">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {data.map((item, index) => (
                                <span key={index} className="bg-gray-200 px-3 py-1 rounded-lg text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </div>

    );
}
