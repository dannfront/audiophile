

interface Props {
    quantity: number;
    removeFromCart: () => void;
    addFromCart: () => void;
}

export default function SelectQuantity({ quantity, removeFromCart, addFromCart }: Props) {
    return (
        <div className="w-[120px] flex justify-between p-3 bg-[#F1F1F1]">
            <button className="opacity-25 cursor-pointer w-[20px]" type="button" onClick={removeFromCart}>-</button>
            <div className="font-bold">{quantity}</div>
            <button className="opacity-25 cursor-pointer w-[20px]" type="button" onClick={addFromCart}>+</button>
        </div>
    )
}
