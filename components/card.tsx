import img from '@/public/solar.jpg'
import Image from 'next/image'

const Card = () => {
    return (
        <div >
            <div className='p-3'>
                <Image src={img} alt='Solar' placeholder='blur' width={300} height={600} />
            </div>
            <div className='flex flex-col justify-start'>
                <h4 className=' text-xl uppercase text-lightPrimary'>Solar Booklet</h4>
                <span className=' text-lg'>Book Design</span>
                <span className=' text-sm'>January, 2024</span>
            </div>
        </div>
    )
}

export default Card