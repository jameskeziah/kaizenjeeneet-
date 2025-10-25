import { ClerkProvider } from "@clerk/nextjs";
import { title } from "process";

export const metadata = {
  title: 'Nextjs 13 with Clerk',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}