import "./globals.css";
import "@tailwindplus/elements";
import { ElDisclosure, ElDropdown, ElMenu } from "@tailwindplus/elements/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Megasur",
    template: "%s | Megasur"
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="bg-black text-gray-300 text-center">
          <h1 className="dark:text-gray-400 font-bold text-3xl p-6">Megasur</h1>

          <nav className="relative justify-items-center-safe">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                        Inicio
                      </Link>
                      <Link
                        href="/about"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        Equipo
                      </Link>
                      <Link
                        href="/products"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        Productos
                      </Link>
                      <Link
                        href="/login"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main className="grow">{children}</main>
        <footer className="text-center bg-black text-gray-300">
          <h1 className="dark:text-gray-400 font-bold text-2xl p-6">Footer</h1>
        </footer>
      </body>
    </html>
  );
}
