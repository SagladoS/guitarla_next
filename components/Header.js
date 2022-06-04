import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import { useRouter } from 'next/router' 
import styles from "../styles/header.module.css"


const Header = ({ guitarra }) => {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/">
                        <a>
                            <Image priority="true" width={400} height={100} src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                        <Link href="/carrito">
                            <a>
                                <Image layout='fixed' width={30} height={25} src="/img/carrito.png" alt="imagen carrito" />
                            </a>
                        </Link>
                    </nav>
                </div>

                {guitarra && (
                    <div className={styles.modelo}>
                        <h2 className={styles.modeloh2}>Modelo {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={styles.precio}>${guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={styles.enlace}>
                                Ver Producto
                            </a>
                        </Link>
                    </div>
                )}
            </div>

            {router.pathname === '/' && (
                <div  className={styles.guitarra}> 
                    <Image width={500} height={1200} src="/img/header_guitarra.png" alt="imagen guitarra"  />
                </div>
            )}
        </header>
    )
}

export default Header