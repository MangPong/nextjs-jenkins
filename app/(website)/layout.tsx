export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <div className="w-full h-16 bg-red-500  text-center ">Navbar</div>
            <div className="">{children}</div>
        </>
    )
}