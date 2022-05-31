import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import styles from "../styles/header.module.css"


const Header = () => {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/">
                        <Image width={400} height={100} src="/img/logo.svg" alt="imagen logo" />
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header