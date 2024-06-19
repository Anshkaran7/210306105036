'use client'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import productsData from '@/data/data.json'

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

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsData)
  const [company, setCompany] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(10000)
  const [top, setTop] = useState<number>(10)

  useEffect(() => {
      // const fetchProducts = async () => {
      //   try {
      //     const response = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
      //       headers: {
      //         'Authorization': `Bearer ${token}`
      //       }
      //     })
      //     if (!response.ok) {
      //       throw new Error('Failed to fetch products')
      //     }
      //     const data = await response.json()
      //     setProducts(data)
      //   } catch (error) {
      //     console.error(error)
      //   }
      // }

      // fetchProducts()

      const filterProducts = () => {
        let filteredProducts = productsData

        if (company) {
          filteredProducts = filteredProducts.filter(product => product.company === company)
        }

        if (category) {
          filteredProducts = filteredProducts.filter(product => product.category === category)
        }

        filteredProducts = filteredProducts.filter(product =>
          product.price >= minPrice && product.price <= maxPrice
        )

        setProducts(filteredProducts.slice(0, top))
    }

      filterProducts()
  }, [company, category, minPrice, maxPrice, top])

  return (
    <div className="container mx-auto p-4 text-black bg-white">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="mb-6 flex flex-wrap">
        <div className="mr-4 mb-4">
          <label className="mr-2">Company:</label>
          <select onChange={(e) => setCompany(e.target.value)} title='Category' className="p-2 border rounded">
            <option value="">All</option>
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </div>
        <div className="mr-4 mb-4">
          <label className="mr-2">Category:</label>
          <select title='Category' onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
            <option value="">All</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Charger">Charger</option>
            <option value="Mouse">Mouse</option>
            <option value="Keypad">Keypad</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Remote">Remote</option>
            <option value="Speaker">Speaker</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
          </select>
        </div>
        <div className="mr-4 mb-4">
          <label className="mr-2">Min Price:</label>
          <input title="number" type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="p-2 border rounded" />
        </div>
        <div className="mr-4 mb-4">
          <label className="mr-2">Max Price:</label>
          <input title="number" type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="p-2 border rounded" />
        </div>
        <div className="mr-4 mb-4">
          <label className="mr-2">Top:</label>
          <input title="number" type="number" value={top} onChange={(e) => setTop(Number(e.target.value))} className="p-2 border rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
