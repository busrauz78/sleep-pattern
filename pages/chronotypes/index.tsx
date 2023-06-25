import { CHRONOTYPES } from '@/constants';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Home.module.css';

export default function Chronotypes() {
  return (
    <div>
      <div>
        <h1>What are the Chronotypes?</h1>
        <p>
          We already know about the early birds and the night owls, but I’ve
          actually broken it down further into four chronotypes that indicate a
          person’s ideal schedule according to their unique internal clock.
          These chronotypes are dolphin, lion, bear, and wolf.
        </p>
      </div>
      <div>
        {CHRONOTYPES.map((c) => (
          <Link key={c.id} className={styles.card} href={`/chronotypes/${c.id}`}>
            <img src={c.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}
