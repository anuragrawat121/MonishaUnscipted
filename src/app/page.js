"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && <Hero />}
    </main>
  );
}
