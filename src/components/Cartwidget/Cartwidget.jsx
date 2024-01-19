import { ShoppingCart } from 'react-feather';

const Cartwidget = () => {

    return (
        <button className="relative px-5 py-3 border border-slate-200 rounded-lg"> <ShoppingCart color='#1F2937' size="20" /> <span className="bg-red-500 px-2 py-1 rounded-full text-white absolute -top-2 -right-2 text-xs">4</span> </button>
    )
}

export default Cartwidget