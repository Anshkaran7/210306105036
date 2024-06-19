import Image from 'next/image'
import Link from 'next/link'

interface Product {
    id: string;
    name: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900">{product.name}</div>
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
