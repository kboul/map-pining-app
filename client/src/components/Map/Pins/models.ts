interface Pin {
  createdAt: string;
  description: string;
  latitude: number;
  longitude: number;
  rating: number;
  title: string;
  updatedAt: string;
  username: string;
  _id: number;
}

interface PinProps {
  pins: Pin[];
}

export type { Pin, PinProps };
