import { mysqlPools } from "@/app/utils/db";

export default function TodoVivewPage({
    params
}: {
    params: { id: number }
}) {
    const todoId = await params.id
    const promisePool = mysqlPools.promise()
    const [rows,fields] = await promisePool.execute(`select * from todos where id = ${todoId}`)

    if(rows.length > 0) {
        return (
            <>
                <div className="p-3">
                    <h1>TOdo View</h1>
                    <div>Title : {data.title}</div>
                    <div>Description : {data.description}</div>
                    <div>Created At : {data.created_at.toISOString()}</div>
                    <div>Updated AT : {data.updated_at.toISOString()}</div>
                </div>
            </>
        );
}else {
    return (
        <>
            <div className="p-3">
                <h1>No  DATA Found</h1>
            </div>
        </>
    );
    }

}

    