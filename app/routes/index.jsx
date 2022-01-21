import { Link } from "remix";
import stylesUrl from "../styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
    return (
      <>
        <h1>Am I Losing You?</h1>
        <p>Probably.</p>
        <p>Lets be honest. Meetings take way longer than they need to. Presentations are often long winded. Does your professor even know that everyone is lost?</p>
        <p>It shouldn't be like this.</p>
        <Link to="/presentations">Presentations</Link>
      </>
    )
}