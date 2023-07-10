import Layout from '@/components/layout';
import { CHRONOTYPES } from '@/constants';
import { IChronotype } from '@/interfaces';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export default function Chronotype() {
  const router = useRouter();
  const { id } = router.query;
  const chronotype: IChronotype | null =
    CHRONOTYPES.find((c) => c.id === id) || null;
  return chronotype ? (
    <Layout>
      <div className="text-center flex flex-col justify-center items-center gap-6">
        <h1>{chronotype.title}</h1>
        <Image src={chronotype.image} alt="Chronotype" width={600} height={600} />
        <p className="max-w-3xl">{chronotype.description}</p>
      </div>
    </Layout>
  ) : null;
}
