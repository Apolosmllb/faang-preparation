"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="rounded-sm">
      <h1>Welcome to Tiendita!</h1>
      <button className="bg-orange-500">carritos</button>
      <br></br>
      <button className="bg-red-500">aviones</button>
    </div>
  );
}
