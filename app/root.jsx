import { Link, Links, LiveReload, Outlet } from "remix";
import styles from "../tailwind.css";
import reset from './styles/reset.css';

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: reset }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Am I losing you?</title>
        <Links />
      </head>
      <body className="px-4 md:px-6">
        <header className="fixed top-0 left-0 w-full">
          <nav className="bg-teal-500 p-5 flex justify-between">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <Link to="/presentations" className="text-white hover:underline">Presentations</Link>
          </nav>
        </header>
        <main className="mt-16 pt-2">
          <Outlet />
        </main>
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
