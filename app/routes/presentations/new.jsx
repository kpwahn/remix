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
                    <input className="border-2 border-black outline-teal-500 outline-8 rounded-md py-2 mr-2" type="text" name="name" />
                </label>
                <button className="btn" type="submit">Submit</button>
            </Form>
        </>
    )
}