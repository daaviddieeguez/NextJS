import "./globals.css";
import "@tailwindplus/elements";
import { ElDisclosure, ElDropdown, ElMenu } from "@tailwindplus/elements/react";
import { Metadata } from "next";

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
        <header className="bg-gray-800 text-gray-300 text-center">
          <h1 className="dark:text-gray-400 font-bold text-3xl p-6">Megasur</h1>

          <nav className="relative justify-items-center-safe">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button
                    type="button"
                    command="--toggle"
                    commandfor="mobile-menu"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                  >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6 in-aria-expanded:hidden"
                    >
                      <path
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6 not-in-aria-expanded:hidden"
                    >
                      <path
                        d="M6 18 18 6M6 6l12 12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <a
                        href="/"
                        aria-current="page"
                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                      >
                        Inicio
                      </a>
                      <a
                        href="/about"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        Equipo
                      </a>
                      <a
                        href="/products"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        Productos
                      </a>
                      <a
                        href="/login"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        Login
                      </a>
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
        <footer className="text-center bg-gray-800 text-gray-300 font-bold text-2xl">
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
