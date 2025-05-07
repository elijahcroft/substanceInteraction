import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 bg-[radial-gradient(ellipse_at_75%_80%,_rgba(255,255,255,0.015)_0%,_transparent_100%)]">
      <Navbar />
      <div className="grid grid-cols-1 place-items-center px-6 py-10">
    
        <p className="text-5xl underline underline-offset-8 mb-10">About</p>

        <div className="bg-zinc-800 p-6 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.05)] w-full max-w-4xl text-xl mb-8 ">
          <h1 className="text-4xl mb-3">Our Mission</h1>
          <p>
            SafeSubstance exists to reduce harm through education. We believe that understanding is the first step
            toward safety, especially when it comes to substance use. Many people mix drugs unknowingly, unaware
            of the risks involved. Our mission is to provide clear and reliable information, so users can make informed, safer choices.
          </p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.05)] w-full max-w-4xl text-xl mb-8">
          <h1 className="text-4xl mb-3">Why We Built This</h1>
          <p>
            As college students, we&rsquo;re constantly surrounded by a culture where drug use, recreational or otherwise, is
            common, yet rarely discussed in honest terms. Searching for help can feel embarrassing or even risky.
            We built this tool because we believe knowledge should never be gatekept. This site doesn&rsquo;t promote drug use;
            it promotes informed decisions, reduces misinformation, and encourages responsible behavior in an imperfect world.
          </p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.05)] w-full max-w-4xl text-xl mb-8">
          <h1 className="text-4xl mb-3">Who Are We</h1>
          <p>
            I'm Elijah, a student of computer science and philosophy who believes that technology can serve as a moral tool.
            Safe drug use is something I care deeply about—not just because of its importance to health, but because I believe
            every person deserves access to knowledge that can protect their life. This project is a reflection of that belief.
          </p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.05)] w-full max-w-4xl text-xl mb-8">
          <h1 className="text-4xl mb-3">Disclaimer</h1>
          <p>
            This site is intended for educational purposes only. We are not medical professionals, and nothing here
            should be taken as medical advice. Always consult a licensed healthcare provider before making decisions
            related to substance use. The goal of SafeSubstance is to support safety—not to replace professional care.
          </p>
        </div>

        <div className="text-center mt-10 text-lg text-gray-300">
          <p>
            Want to contribute or get involved? Reach out at{" "}
            <a href="mailto:elijahcroftdev@gmail.com" className="text-blue-400 underline hover:text-blue-300">
              elijahcroftdev@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
