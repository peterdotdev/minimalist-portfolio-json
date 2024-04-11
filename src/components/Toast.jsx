import { useStore } from "@nanostores/react";
import { isToastOpen } from "../toastStore";

export default function Toast() {
  // lee el valor del store con el hook `useStore`
  const $isToastOpen = useStore(isToastOpen);

  return (
    <div>
      {$isToastOpen ? (
        <div
          style={{
            position: "fixed",
            margin: "auto",
            width: 270,
            bottom: 32,
            left: "calc(50% - 135px)",
          }}
        >
          <div
            style={{
              backgroundColor: "#222",
              display: "flex",
              justifyContent: "space-between",
              paddingInline: 12,
              paddingBlock: 6,
              gap: 16,
              borderRadius: 6,
            }}
          >
            <p style={{ color: "white", fontSize: 12 }}>
              Número copiado al portapapeles
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-copy"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h3m9 -9v-5a2 2 0 0 0 -2 -2h-2"></path>
              <path d="M13 17v-1a1 1 0 0 1 1 -1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1 -1 1h-1m-3 0h-1a1 1 0 0 1 -1 -1v-1"></path>
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
}