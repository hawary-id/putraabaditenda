export default function Header({label}) {
    return (
        <section className="w-full h-96 bg-cover bg-[url('/asset/hiro.png')]">
            <div className="container flex flex-col items-center justify-center h-full mx-auto text-center">
                <h1 className="mb-6 text-6xl font-bold text-white uppercase">{label}</h1>
            </div>
        </section>
    )
}