import { Link, useLoaderData } from "remix";
import { supabase } from "~/entry.server"

export let loader = async () => {
    const { data, error } = await supabase
        .from('presentations')
        .select()

    return data;
}

export default function Presentations() {
    const data = useLoaderData();
    
    return (
        <>
            <h1 className="text-3xl font-bold">Presentations</h1>
            <ul className="mb-4">
                {data.map(x => (
                    <li key={x.name}>{x.name}</li>
                    ))}
            </ul>
            <Link class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" to="new">Create New</Link>
        </>
    )
}