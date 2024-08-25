import { useEffect, useState } from 'react'
import AdminScreen from '.'
import { apiUrl } from '../../helpers/url'
import axios from 'axios'
import { toast } from 'react-toastify'
import { config } from '../../helpers/token'

function AdminProducts() {
    const [products, setProducts] = useState(null)

    function fetchProducts() {
        axios.get(`${apiUrl}product/list`)
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.body)
                } else {
                    setProducts([])
                }
            })
            .catch(error => {
                toast.error('Failed to fetch products')
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    function deleteProduct(productId) {
        if (config && productId) {
            axios.delete(`${apiUrl}product/${productId}`, config)
                .then(response => {
                    if (response.data.success) {
                        toast.success('Product deleted successfully')
                        fetchProducts()
                    } else {
                        toast.error('Failed to delete product')
                    }
                }).catch(() => {
                    toast.error('Failed to delete product')
                })
        } else {
            toast.error('server error')
        }
    }

    return (
        <AdminScreen title={'Client'}>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product, key) =>
                            <tr key={key} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-900 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {key + 1}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {product.name}
                                </th>
                                <td class="px-6 py-4">
                                    {product.description}
                                </td>
                                <td class="px-6 py-4">
                                    {product.price}
                                </td>
                                <td class="px-6 py-4">
                                    <p onClick={() => deleteProduct(product.id)} href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">delete</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </AdminScreen>
    )
}

export default AdminProducts
