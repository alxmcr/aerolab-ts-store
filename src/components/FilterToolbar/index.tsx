import { useState } from "react";

export const FilterToolbar = () => {
    const [quantityProducts, setQuantityProducts] = useState<number>(16);
    const [quantityTotalProducts, setQuantityTotalProducts] = useState<number>(32);
    return (
        <div className="filter">
            <p className="filter__status">{quantityProducts} of {quantityTotalProducts}</p>
        </div>
    )
}