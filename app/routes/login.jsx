import { Form } from "remix";

export const action = async ({request}) => {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    return null;
}

export default function Login() {
    return (
        <>
            <h1>Login</h1>
            <Form method="post">
                <label>
                    Email:
                    <input name="email" placeholder="john@doe.com" type="email" />
                </label>
                <label>
                    Password:
                    <input name="password" type="password" />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
}