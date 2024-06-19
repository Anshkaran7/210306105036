'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Product {
    id: string
    productName: string
    price: number
    rating: number
    discount: number
    availability: string
    company: string
    category: string
    image: string
}

const productsData: Product[] = [
    {
        id: '1',
        productName: 'Laptop 1',
        company: 'Example Company 1',
        category: 'Category 1',
        price: 2236,
        rating: 4.7,
        discount: 63,
        availability: 'yes',
        image: '/assets/laptop1.jpeg'
    },
    {
        id: '2',
        productName: 'Laptop 13',
        company: 'Example Company 2',
        category: 'Category 2',
        price: 1244,
        rating: 4.5,
        discount: 45,
        availability: 'out-of-stock',
        image: '/assets/laptop2.jpg'
    },
    {
        id: '3',
        productName: 'Laptop 3',
        company: 'Example Company 3',
        category: 'Category 3',
        price: 9102,
        rating: 4.44,
        discount: 98,
        availability: 'out-of-stock',
        image: '/assets/laptop3.jpg'
    },
    {
        id: '4',
        productName: 'Laptop 11',
        company: 'Example Company 4',
        category: 'Category 4',
        price: 2652,
        rating: 4.12,
        discount: 70,
        availability: 'yes',
        image: '/assets/laptop4.jpg'
    }
]

const ProductPage = () => {
    const path = usePathname()
    const id = path.split('/').pop()
    const [product, setProduct] = useState<Product | undefined>()

    useEffect(() => {
        if (id) {
            const foundProduct = productsData.find(product => product.id === id)
            setProduct(foundProduct)
        }
    }, [id])

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div className="container mx-auto p-8 bg-white shadow-md rounded-lg">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">{product.productName}</h1>
            <div className="flex flex-col lg:flex-row items-start text-black lg:items-center">
                <div className="flex-1 mb-6 lg:mb-0">
                    <Image src={product.image} alt={product.productName} width={500} height={500} className="rounded-lg shadow-md" />
                </div>
                <div className="flex-1 lg:ml-6">
                    <p className="text-lg mb-2"><span className="font-semibold">Company:</span> {product.company}</p>
                    <p className="text-lg mb-2"><span className="font-semibold">Category:</span> {product.category}</p>
                    <p className="text-lg mb-2"><span className="font-semibold">Price:</span> ${product.price}</p>
                    <p className="text-lg mb-2"><span className="font-semibold">Rating:</span> {product.rating} / 5</p>
                    <p className="text-lg mb-2"><span className="font-semibold">Discount:</span> {product.discount}%</p>
                    <p className={`text-lg mb-2 ${product.availability === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                        <span className="font-semibold">Availability:</span> {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
