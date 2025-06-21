"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    fetch("/api/plausible")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      {data ? (
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
