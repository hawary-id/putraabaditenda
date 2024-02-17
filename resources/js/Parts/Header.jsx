export default function Header({label}) {
    return (
        <section className="w-full h-44 md:h-96 bg-cover bg-[url('/asset/hiro.png')]">
            <div className="container flex flex-col items-center justify-center h-full mx-auto text-center">
                <h1 className="text-3xl font-bold text-white uppercase md:text-6xl">{label}</h1>
            </div>
        </section>
    )
}