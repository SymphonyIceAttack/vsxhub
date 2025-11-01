import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "VSCode Extensions Hub - Discover the best VSCode extensions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* VSCode Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            backgroundColor: "#007ACC",
            borderRadius: "24px",
            marginBottom: "40px",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 0L6.5 11L2.5 7.5L0 9.5L6.5 16L20 2.5L17.5 0Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          VSCode Extensions Hub
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "32px",
            color: "#a0a0a0",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Discover and explore the best Visual Studio Code extensions
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#007ACC",
              }}
            >
              1000+
            </div>
            <div
              style={{
                fontSize: "24px",
                color: "#808080",
              }}
            >
              Extensions
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#007ACC",
              }}
            >
              16
            </div>
            <div
              style={{
                fontSize: "24px",
                color: "#808080",
              }}
            >
              Categories
            </div>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
