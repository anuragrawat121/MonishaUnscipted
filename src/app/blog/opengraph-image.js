import { ImageResponse } from "next/og";

export const alt = "The Trust Gap in Public Communication by Monisha Bahuguna";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function BlogOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          color: "#ffffff",
          background: "#0c0c0c",
          fontFamily: "Arial, sans-serif",
          border: "1px solid #ffffff",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 800 }}>
          <span style={{ color: "#a0a09a" }}>FIELD NOTE 01</span>
          <span>MONISHA BAHUGUNA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1020, fontSize: 86, fontWeight: 800, lineHeight: 0.92 }}>
          <span>THE TRUST GAP IN</span>
          <span style={{ color: "#ffffff" }}>PUBLIC COMMUNICATION</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, fontWeight: 700 }}>
          <span style={{ padding: "11px 15px", color: "#ffffff", background: "#0c0c0c", border: "1px solid #ffffff" }}>
            STRATEGY JOURNAL / 7 MIN READ
          </span>
        </div>
      </div>
    ),
    size
  );
}
