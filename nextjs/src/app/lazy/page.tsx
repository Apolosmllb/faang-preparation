"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const ComponentA = dynamic(() => import("../movies/page"));
const ComponentB = dynamic(() => import("../video/page"));
const ComponentC = dynamic(() => import("../component/page"), { ssr: false });

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Load immediately, but in a separate client bundle */}
      <ComponentA />

      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}
      <button className="bg-green-900" onClick={() => setShowMore(!showMore)}>
        Toggle
      </button>

      {/* Load only on the client side */}
      <ComponentC />
    </div>
  );
}
