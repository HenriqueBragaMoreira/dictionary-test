import { Providers } from '@/components/providers'
export default function Layout({ children } : { children: React.ReactNode }) {
    return (
      <html suppressHydrationWarning>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    )
  }