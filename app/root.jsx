import { Link, Links, LiveReload, Outlet } from "remix";
import reset from './styles/reset.css';

export const links = () => {
  return [{ rel: "stylesheet", href: reset }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Am I losing you?</title>
        <Links />
      </head>
      <body>
        <Link to="/">Home</Link>
        <Outlet />
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}