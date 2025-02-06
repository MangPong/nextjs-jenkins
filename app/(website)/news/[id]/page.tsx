export default async function DisplayNewsByIdPage({
    params
}: {
    params: { id: number}
}) {

    params = await params

    return (
        <>
            <div className="text-center h-10 text-xl ">
                หน้าแสดงข้อมูลข่าวที่ {params.id}
            </div>
            <div className="text-center text-2xl ">หัวข้อข่าว....</div>
            <p>เนื้อข่าว Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere culpa porro esse, ex impedit eum quae fugit, aspernatur accusamus ipsam adipisci amet itaque ipsum consequuntur, dolor voluptates! Ea, nam commodi.</p>
        </>
    )
}