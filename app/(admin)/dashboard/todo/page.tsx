import { mysqlPools } from "@/app/utils/db"
export default function TodoPage({ }) {
    const promisePool = mysqlPools.promise()
    const todos = await promisePool.execute("select * from todos")
    const [rows, fields] = todos;
    return (
        <>
            <div>
                <h1>Todo list page</h1>
            </div>
            <ul>
                {rows.map(row => (<li key={row.id}>
                    <link className="underline text-blue-500" 
                    href={'/dashboard/todo/'+row.id}>{row.title}</link>
                    </li>))}
            </ul>
        </>
    );
}