// import './globals.css';

// This is the default export that Next.js requires.
// It must be a React component that takes a `children` prop.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* The `children` prop is where Next.js will render your nested pages. */}
        {children}
      </body>
    </html>
  );
}
