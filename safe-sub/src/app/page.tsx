import Head from 'next/head';
import Image from 'next/image';
import DrugCard from './components/drug';
import Category from './components/category';
import Left from './components/left-half';
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300;1,400;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Navbar */}
      <nav className="navbar border-b border-gray-700 bg-gray-900 text-white sticky top-0">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <a className="flex items-center text-gray-300 text-lg" href="#">
            <Image src="/images/logo1.png" width={50} height={40} alt="logo" className="mr-2" />
            <span>Substance Interactions</span>
          </a>
          <form className="flex items-center space-x-2">
            <input
              className="form-control bg-gray-800 text-gray-300 p-2 rounded"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex px-10 py-10">
        
        <Left/>
       </div>
    </>
  );
}
