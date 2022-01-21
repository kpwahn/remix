import { Form } from "remix";
import { supabase } from "~/entry.server";

export const action = async ({request}) => {
    const form = await request.formData();
    const name = form.get("name");

    const { data, error } = await supabase
    .from('presentations')
    .insert([
        { name }
    ])

    return data
}

export default function New() {
    return (
        <>
            <h1>New Presentaion</h1>
            <Form method="post">
                <label>
                    <input type="text" name="name" />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}