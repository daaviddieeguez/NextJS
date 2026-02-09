export default async function ProductReview({
    params
}: {
        params: Promise<{ productId: String, reviewId: String }>;
}) {
    const { productId, reviewId } = await params;

    return (
        <h1>
            Review: {reviewId} para el producto: {productId}
        </h1>
    );
}