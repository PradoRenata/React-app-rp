import { GitHub, Linkedin } from 'react-feather';

const Footer = () => {

    return (
        <div className='bg-white text-slate-800 p-20 flex justify-between w-full'>
            <div className='flex gap-2 pt-4'>
                <h6>Dino Tienda © 2023 React Project.<span className='px-4 text-slate-200'>|</span>Renata Prado</h6>
            </div>
            <div className='flex gap-2'>
                <a href="https://github.com/PradoRenata/React-app-rp">
                    <button className='p-4 border border-slate-200 rounded-lg hover:bg-slate-100'><GitHub color='#1F2937' size="24" />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/pradov-renata/">
                    <button className='p-4 border border-slate-200 rounded-lg hover:bg-slate-100'><Linkedin color='#1F2937' size="24" />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Footer