import Image from 'next/image'
import Link from 'next/link'

import styles from './index.module.scss'

function IconComponent({ logo, link }) {
  console.log(link);  
  return (
    <Link href= {link} >
      <button className={styles.logo_btn}>
        <Image src={logo} alt="logo" />
      </button>
    </Link>
  )
}

export default IconComponent