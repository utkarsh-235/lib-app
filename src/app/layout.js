import './globals.css';

export const metadata = {
  title: 'Library App',
  description: 'Login and Signup system for Library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-amber-300">
        {children}
      </body>
    </html>
  );
}
