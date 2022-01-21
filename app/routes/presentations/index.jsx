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
            <h1>Presentations</h1>
            <Link to="new">New</Link>
            <ul>
                {data.map(x => (
                    <li key={x.name}>{x.name}</li>
                ))}
            </ul>
        </>
    )
}