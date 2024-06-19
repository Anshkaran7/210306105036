'use client'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'

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
  const [products, setProducts] = useState<Product[]>([])
  const [company, setCompany] = useState<string>('AMZ')
  const [category, setCategory] = useState<string>('Laptop')
  const [minPrice, setMinPrice] = useState<number>(1)
  const [maxPrice, setMaxPrice] = useState<number>(10000)
  const [top, setTop] = useState<number>(10)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
      const data = await response.json()
      setProducts(data)
    }

    fetchProducts()
  }, [company, category, minPrice, maxPrice, top])

  return (
    <div className="container mx-auto p-4 text-black bg-white">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="mb-6">
        <label className="mr-4">Company:</label>
        <select onChange={(e) => setCompany(e.target.value)} className="p-2 border rounded" title="Company">
          <option value="AMZ">AMZ</option>
          <option value="FLP">FLP</option>
          <option value="SNP">SNP</option>
          <option value="MYN">MYN</option>
          <option value="AZO">AZO</option>
        </select>
        <label className="mr-4 ml-4">Category:</label>
        <select onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded" title="Category">
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
        <label className="mr-4 ml-4">Min Price:</label>
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="p-2 border rounded" placeholder="Min Price" />
        <label className="mr-4 ml-4">Max Price:</label>
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="p-2 border rounded" placeholder="Max Price" />
        <label className="mr-4 ml-4">Top:</label>
        <input type="number" value={top} onChange={(e) => setTop(Number(e.target.value))} className="p-2 border rounded" placeholder="Top" />
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
