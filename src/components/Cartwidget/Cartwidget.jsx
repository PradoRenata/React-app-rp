import { ShoppingCart } from 'react-feather';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cartwidget = () => {

    const { itemsInCart } = useContext(CartContext)

    return (
        <Link to="/Cart" className="relative px-5 py-3 border border-slate-200 rounded-lg"> <ShoppingCart color='#1F2937' size="20" /> <span className={`${itemsInCart() === 0 ? 'invisible opacity-0' : 'visible opacity-100'} bg-red-500 w-6 text-center py-1 rounded-full text-white absolute -top-2 -right-2 text-xs`}>{ itemsInCart() }</span> </Link>
    )
}

export default Cartwidget