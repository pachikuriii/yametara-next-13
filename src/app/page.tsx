import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>top page</p>
      <Link href="/questions/1" className="underline">
        はじめる
      </Link>
    </main>
  );
}
