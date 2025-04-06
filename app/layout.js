import './globals.css';

export const metadata = {
  title: 'Mems - AI-Generated Memory Storybook',
  description: 'Create AI images from your memories and organize them in a digital storybook',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
