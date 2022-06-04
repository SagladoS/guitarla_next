import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
    return (
        <Layout
            pagina=" Nosotros"
        >
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>

                <div className={styles.contenido}>
                    <Image priority="true" layout="responsive" width={600} height={400} src="/img/nosotros.jpg" alt="Imagen sobre Nosotros" />

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at pellentesque urna.
                            Sed ultrices pretium enim, auctor suscipit erat tincidunt ut. Maecenas ac sem mollis
                            mauris facilisis placerat. Integer et faucibus mauris, a semper eros. Etiam vitae sem 
                            ac lacus porttitor pulvinar. Phasellus fringilla vel mi vel aliquet. Aenean commodo 
                            ligula vestibulum nulla efficitur, at varius ex dignissim. Vivamus vel sodales elit, 
                            vitae bibendum dui. Mauris fringilla, sapien eget scelerisque tempus, neque eros 
                            malesuada ante, vel molestie mi erat eu tortor. Phasellus consectetur gravida risus 
                            eget tincidunt. Etiam quis neque eget tortor mollis commodo. Quisque ut diam eu ex 
                            rutrum pulvinar. Curabitur ac porttitor metus. </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros