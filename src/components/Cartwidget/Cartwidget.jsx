import { ShoppingCart } from 'react-feather';

const Cartwidget = () => {

    return (
        <button className="relative my-2 py-2 px-6 rounded-lg shadow-none text-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500"> <ShoppingCart color='white' size="20" /> <span className="bg-white px-2 rounded-full text-gray-900 absolute -top-2 -right-2 text-sm">0</span> </button>
    )
}

export default Cartwidget