import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-16 pb-20">
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
