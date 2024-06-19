import ProductCard from '../components/ProductCard'

const products = [
  {
    id: '1',
    name: 'Laptop 1',
    image: '/assets/laptop1.jpeg',
  },
  {
    id: '2',
    name: 'Laptop 2',
    image: '/assets/laptop2.jpg',
  },
]

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
