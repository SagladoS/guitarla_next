import Head from 'next/head'
import Header from './Header'

const Layout = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title>GuitarLa -{pagina}</title>
                <meta name="description" content='Sitio Web de venta de guitarras' />
            </Head>

            <Header />

            {children}
        </div>
    )
}

export default Layout