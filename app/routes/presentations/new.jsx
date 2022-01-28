import { Form, redirect } from "remix";
import { supabase } from "~/entry.server";

export const action = async ({request}) => {
    const form = await request.formData();
    const name = form.get("name");

    const { data, error } = await supabase
    .from('presentations')
    .insert([
        { name }
    ])

    return redirect('/presentations')
}

export default function New() {
    return (
        <>
            <h1>New Presentaion</h1>
            <Form method="post">
                <label>
                    <input type="text" name="name" />
                </label>
                <button className="p-2 rounded-md bg-purple-500 text-white" type="submit">Submit</button>
            </Form>
        </>
    )
}