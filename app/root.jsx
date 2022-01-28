import { Link, Links, LiveReload, Outlet } from "remix";
import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Am I losing you?</title>
        <Links />
      </head>
      <body className="p-4">
        <header>
          <nav>
            <ul>
              <li><Link className="underline" to="/">Home</Link></li>
            </ul>
          </nav>
        </header>
        <Outlet />
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}