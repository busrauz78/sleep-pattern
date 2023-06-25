import { CHRONOTYPES } from '@/constants';
import { IChronotype } from '@/interfaces';
import { useRouter } from 'next/router';

export default function Chronotype() {
  const router = useRouter();
  const { id } = router.query;
  const chronotype: IChronotype | null =
    CHRONOTYPES.find((c) => c.id === id) || null;
  return chronotype ? <div>
    <h1>{chronotype.title}</h1>
    <img src={chronotype.image} />
    <p>{chronotype.description}</p>
  </div> : null;
}
