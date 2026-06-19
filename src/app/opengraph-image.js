import { ImageResponse } from "next/og";

export const alt = "Monisha Bahuguna strategic communications and policy advocacy portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px",
          color: "#ffffff",
          background: "#0c0c0c",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 700 }}>
          <span>MONISHA BAHUGUNA</span>
          <span>PUBLIC IMPACT / COMMUNICATION</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 800, lineHeight: 0.9 }}>
          <span>STRATEGIC</span>
          <span style={{ color: "#ffffff" }}>COMMUNICATIONS</span>
          <span>& POLICY ADVOCACY</span>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, fontWeight: 700 }}>
          <span style={{ padding: "10px 14px", color: "#ffffff", background: "#0c0c0c", border: "1px solid #ffffff" }}>
            GOVERNANCE
          </span>
          <span style={{ padding: "10px 14px", color: "#ffffff", background: "#0c0c0c", border: "1px solid #ffffff" }}>
            PUBLIC HEALTH
          </span>
          <span style={{ padding: "10px 14px", color: "#ffffff", background: "#0c0c0c", border: "1px solid #ffffff" }}>
            MEDIA
          </span>
        </div>
      </div>
    ),
    size
  );
}
