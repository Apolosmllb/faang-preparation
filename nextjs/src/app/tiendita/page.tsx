"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(`tiendita/${route}`);
  };

  return (
    <div className="rounded-sm">
      <h1>Welcome to Tiendita!</h1>
      <button className="bg-orange-500" onClick={() => handleClick("carritos")}>
        carritos
      </button>
      <br></br>
      <button className="bg-red-500" onClick={() => handleClick("aviones")}>
        aviones
      </button>
    </div>
  );
}
