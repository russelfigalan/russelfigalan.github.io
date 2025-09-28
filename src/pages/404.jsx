import { Link } from "react-router"

export default function NotFound() {
    return (
        <>
            <section className="min-h-[calc(100dvh-5rem)] flex flex-col justify-center-safe items-center-safe">
                <h1 className="font-hero text-9xl md:text-[20em]">404</h1>
                <p className="mb-5 font-hero text-xl md:text-4xl text-center">The page you are looking for does not exist.</p>
                <Link to="/"><button className="py-2 px-5 font-bold border rounded-full cursor-pointer">Go to Homepage</button></Link>
            </section>
        </>
    )
}