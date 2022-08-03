import { StaticImageData } from 'next/image';

export interface SocketEventInitProps<T = (p: any) => void> {
  event: string;
  data: T;
}

export type HomeFunctionProps = {
  title: string;
  desc: string;
  image: string | StaticImageData;
  onClick: () => void;
};