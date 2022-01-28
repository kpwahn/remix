import { Link } from "remix";

export default function IndexRoute() {
    return (
      <>
        <h1>Am I Losing You?</h1>
        <p className="text-3xl font-bold underline">Probably.</p>
        <p>Lets be honest. Meetings take way longer than they need to. Presentations are often long winded. Does your professor even know that everyone is lost?</p>
        <p>It shouldn't be like this.</p>
        <Link to="/presentations">Presentations</Link>
      </>
    )
}