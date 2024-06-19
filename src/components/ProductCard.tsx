import Link from 'next/link'

interface Product {
    id: string;
    name: string;
    image: string;
    company: string;
    category: string;
    price: number;
    rating: number;
    discount: number;
    availability: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white">

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900">{product.name}</div>
                <p className="text-lg mb-2"><span className="font-semibold">Company:</span> {product.company}</p>
                <p className="text-lg mb-2"><span className="font-semibold">Category:</span> {product.category}</p>
                <p className="text-lg mb-2"><span className="font-semibold">Price:</span> ${product.price}</p>
                <p className="text-lg mb-2"><span className="font-semibold">Rating:</span> {product.rating} / 5</p>
                <p className="text-lg mb-2"><span className="font-semibold">Discount:</span> {product.discount}%</p>
                <p className={`text-lg mb-2 ${product.availability === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="font-semibold">Availability:</span> {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <Link href={`/products/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                </Link>

            </div>
        </div>
    )
}

export default ProductCard
