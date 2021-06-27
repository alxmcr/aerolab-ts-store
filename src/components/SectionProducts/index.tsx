import { GalleryProducts } from "components/GalleryProducts";
import { ProductsToolbar } from "components/ProductsToolbar";
import { useState } from "react";

export const SectionProducts = () => {
    const [methodSort, setMethodSort] = useState<string>("");
    return (
        <section className="products">
            <ProductsToolbar setMethodSort={setMethodSort} />
            <GalleryProducts methodSort={methodSort} />
        </section>
    )
}