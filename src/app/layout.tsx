import "./globals.css";

export const metadata = {
  title: "Spotify Interface",
  description: "Listen to Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-zinc-400 bg-[#e7e7e7]">{children}</body>
    </html>
  );
}
