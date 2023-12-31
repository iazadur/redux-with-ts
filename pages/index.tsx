import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import { useAppSelector } from '@/common/hooks/useRedux';
import Counter from '@/features/counter/Counter';
import Todos from '@/features/todos/Todos';

export default function Home() {
  const counter = useAppSelector((state) => state.counter);
  const todos = useAppSelector((state) => state.baseApi.queries['getTodos(undefined)']?.data);

  return (
    <div>
      <Head>
        <title>Next Redux Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.store}>
          <Counter />
          <Todos />
        </div>
        <div className={styles.storeObject}>
          <h3>Store:</h3>
          <pre>{JSON.stringify({ counter }, null, 2)}</pre>
          <pre>{JSON.stringify({ todos }, null, 2)}</pre>
          {/* <pre>{JSON.stringify(appState, null, 2)}</pre> */}
        </div>
      </main>
    </div>
  );
}
