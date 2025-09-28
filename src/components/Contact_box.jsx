import { Link } from 'react-router'

export default function Contact_Card() {
    return (
    <>
        <div className="contact-bg bg-[url('/src/assets/services_images/team.png')] md:gap-10 md:p-10 relative flex justify-center-safe items-center-safe justify-self-center-safe bg-cover bg-center w-[100%] h-[200px] md:w-[80%] mb-10 overflow-hidden">
            <div className='absolute flex flex-col justify-center-safe items-center-safe gap-5 p-5'>
                <h2 className="font-hero font-bold text-white text-center text-3xl md:text-5xl md:[word-spacing:5px]">
                Want to start a project with me?
                </h2>
                <Link to="/contact">
                    <button className='font-bold text-white px-15 py-3 border rounded-full hover:bg-white hover:text-black cursor-pointer'>Get in Touch</button>
                </Link>
            </div>
        </div>    
    </>
    )
}