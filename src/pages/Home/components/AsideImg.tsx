function AsideImgLeft() {

    // Variant	Media query
    // max-sm	@media (width < 40rem) { ... }
    // max-md	@media (width < 48rem) { ... }

    return (
        <aside className="w-full max-w-[140px] bg-purple-500 shadow h-screen flex items-center justify-center max-md:hidden">
            <img
                alt="Logo"
                className="object-contain  p-5"
                src="assets/home-01.png"
            />
        </aside>
    );
}

function AsideImgRight() {
    return (
        <aside className="w-full max-w-[140px] bg-zinc-70 shadow h-screen flex flex-col items-center justify-center max-2xl:hidden">
            <img
                alt="Logo"
                className="object-contain w-28 h-28"
                src="assets/logo.png"
            />

            <div className="py-44 p-5">
                <img
                    alt="Logo"
                    className="object-contain"
                    src="assets/home-02.png"
                />
            </div>
        </aside>
    );
}

export { AsideImgLeft, AsideImgRight };
