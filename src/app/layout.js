import { Inter, Raleway, Sora } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
})
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora'
})

export const metadata = {
  title: 'Restaurant & Nombox',
  description: 'Nombox admin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`}
        ></script>
      </head>
      <body className={`${raleway.className} ${raleway.variable} ${sora.variable} bg-base`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
