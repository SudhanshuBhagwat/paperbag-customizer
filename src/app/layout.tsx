import "tailwindcss/tailwind.css";

export const metadata = {
  title: "Paperbag Customizer",
  description: "A simple Paperbag customizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
