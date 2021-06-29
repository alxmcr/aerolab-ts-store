import { GalleryProducts } from "components/GalleryProducts";

export const SectionProducts = () => {
    return (
        <section className="products">
            <GalleryProducts limitByPage={5} />
        </section>
    )
}