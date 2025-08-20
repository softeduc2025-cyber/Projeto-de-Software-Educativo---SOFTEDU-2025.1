interface Props {
    index: number;
}

function Card({ index }: Props) {
    return (
        <div key={index}
            className="bg-white rounded-[8px] p-6 border border-[#D9D9D9] shadow-md cursor-pointer hover:shadow-lg  hover:-translate-y-3 transition-all duration-300">
            <div className="flex flex-col items-start gap-4">
                <img
                    src="src/assets/tecn.png"
                    alt={`Card ${index + 1}`}
                    className="w-28 h-28 object-cover rounded"
                />
                <div className="flex-1">
                    <h3 className="font-semibold text-lg text-[#1E1E1E] mb-2">
                        Tecnologia
                    </h3>
                    <p className="text-[#757575] text-sm">
                        Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card