const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export const dynamic = "force-dynamic";

async function getBackendTime(): Promise<string | null> {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    const data = (await res.json()) as { now: string };
    return data.now;
  } catch {
    return null;
  }
}

export default async function Home() {
  const now = await getBackendTime();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 p-8">
      <h1 className="text-3xl font-bold">Property Search</h1>
      <p className="text-sm text-gray-500">
        {now
          ? `Backend time: ${now}`
          : "Backend not reachable — is it running on http://localhost:8080?"}
      </p>
    </main>
  );
}
