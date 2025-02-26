import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "Pokemon Explorer",
  description: "Explore Pokémon with Next.js App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-green-200 text-gray-900">

        <div className="flex flex-col min-h-screen">
          <header className="bg-blue-800 text-white p-4 text-center font-bold text-xl">
            <Link href="/">Pokemon Explorer</Link>
          </header>

          <main className="flex-grow p-4">{children}</main>

          <footer className="bg-gray-800 text-white text-center p-4">
            Pokemon Explorer © {new Date().getFullYear()}
          </footer>
        </div>

      </body>
    </html>
  );
}
