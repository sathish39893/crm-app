import './globals.css';

export const metadata = {
  title: 'CRM App',
  description: 'Created using next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full bg-white'>
      <body className="h-full">{children}</body>
    </html>
  )
}
