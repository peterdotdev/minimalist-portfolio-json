import { useStore } from "@nanostores/react";
import { isToastOpen } from "../toastStore";
import { useState } from "react";

export default function Toaster() {
  // lee el valor del store con el hook `useStore`
  const $isToastOpen = useStore(isToastOpen);
  // escribe en el store importado usando `.set`
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      id="anchor_phone"
      style={{
        cursor: "pointer",
        color: "#777",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: hover ? "1px solid #ddd" : "1px solid #eee",
        backgroundColor: hover ? "#eee" : "transparent",
        padding: 4,
        height: 32,
        width: 32,
        borderRadius: 6,
        transition: "all 0.3s ease",
        textDecoration: "none",
      }}
      onClick={() => {
        if (!$isToastOpen) {
          isToastOpen.set(!$isToastOpen);
          setTimeout(() => {
            isToastOpen.set(false);
          }, [4000]);
        }
      }}
      title="Llamar por teléfono a Pedro Perovich al número 005491169236281"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLineCap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </div>
  );
}
