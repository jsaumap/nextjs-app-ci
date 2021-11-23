import styles from '../styles/Home.module.css';
import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button type='primary'>
        <Link href='/Login'>Iniciar sesion</Link>
      </Button>
      {'       '}
      <Button type='primary' danger>
        <div>Registrarse</div>
      </Button>
    </div>
  );
}
