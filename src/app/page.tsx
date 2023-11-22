import Image from 'next/image'
import styles from './page.module.css'
import ResponsiveAppBar from '@/components/navbar/page'
import Footer from '@/components/footer/page'
import SimpleContainer from '@/components/content/page'
import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ResponsiveAppBar />
      <main style={{ flex: '1' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Layout >
        <SimpleContainer />
      </Layout>
    </>
  )
}
