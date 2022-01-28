import { Link, Links, LiveReload, Outlet } from "remix";
import styles from './styles/app.css';

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Am I losing you?</title>
        <Links />
      </head>
      <body className="p-4">
        <Link to="/">Home</Link>
        <Outlet />
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}