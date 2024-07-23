import Image from "next/image";

export default async function Home() {
  const res = await fetch('/api/hello');
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hello World {data.message}</h2>
    </main>
  );
}
