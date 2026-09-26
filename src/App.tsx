import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const techFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const techPromise = techFetch();

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Technologies techPromise={techPromise} />
      </Suspense>
   <Footer/>
      <ToastContainer />
    </div>
  );
};

export default App;