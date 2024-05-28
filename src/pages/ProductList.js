import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productActions';
import ProductCard from '../components/productcard/ProductCard';
import Input from '../components/input/Input';
import "./pages.css"
import Button from '../components/button/Button';
import Loader from '../components/loader/Loader';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0)
    };

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div className='input-container'>
                <Input search={search} setSearch={setSearch} />
            </div>
            <div className="grid-container">
                {currentProducts.map(product => (
                    <ProductCard product={product} />
                ))}
            </div>
            <div>
                {
                    currentProducts.length === 0 && (
                        <h3 className='noProducts'>No Products Found</h3>
                    )
                }
            </div>
            {currentProducts.length > 0 && (
                <div className="pagination">
                    <Button
                        title={"Previous"}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button key={index + 1} title={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''} />
                    ))}
                    <Button
                        title={"Next"}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />
                </div>
            )}
        </div>
    );
};

export default ProductList;
