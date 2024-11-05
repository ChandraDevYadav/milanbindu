import React from 'react'
import ProProduct from './ProProduct'
import ProductFilter from './ProductFilter'
import RecentProducts from './RecentProducts'

const ProductMain = () => {
  return (
    <div className='px-4 md:px-28 py-8 md:py-16'>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            <div className="col-span-8 md:col-span-6">
                <ProProduct/>
            </div>
            <div className="col-span-8 md:col-span-2">
                <ProductFilter/>
                <RecentProducts/>
            </div>
        </div>
    </div>
  )
}

export default ProductMain