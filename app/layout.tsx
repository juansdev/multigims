import type React from "react"
import "@/app/globals.css"
import {Inter} from "next/font/google"
import {ThemeProvider} from "@/components/theme-provider"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "MultiGims - Comunidad de Desarrollo Tecnológico",
    description: "Una comunidad de profesionales tech en un servidor Discord donde colaboramos en proyectos de desarrollo web, móvil, gaming, IA y más.",
    twitter: {
        card: 'summary_large_image',
        title: 'MultiGims - Comunidad de Desarrollo Tecnológico',
        description: 'Una comunidad de profesionales tech en un servidor Discord donde colaboramos en proyectos de desarrollo web, móvil, gaming, IA y más.',
        images: ['/portada2.jpg'],
    },
    openGraph: {
        title: 'MultiGims - Comunidad de Desarrollo Tecnológico',
        description: 'Una comunidad de profesionales tech en un servidor Discord donde colaboramos en proyectos de desarrollo web, móvil, gaming, IA y más.',
        images: ['/portada2.jpg'],
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
