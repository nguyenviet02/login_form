import Image from 'next/image'
import styles from './index.module.scss'

function IconComponent({ logo }) {
  return (
    <button className={styles.logo_btn}>
      <Image src={logo} alt="logo"/>
    </button>
  )
}

export default IconComponent