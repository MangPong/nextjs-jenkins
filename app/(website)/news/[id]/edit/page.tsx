export default async function DisplayNewsByIdPage({
    params
}: {
    params: { id: number}
}) {
    
    params = await params
    
    return (
        <>
            <div>
                หน้าแก้ไขข้อมูลข่าวที่ {params.id}
            </div>
        </>
    )
}