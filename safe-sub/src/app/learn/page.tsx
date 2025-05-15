import Navbar from "../components/navbar";
import Image from 'next/image';

export default function Learn() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 bg-[radial-gradient(ellipse_at_75%_80%,_rgba(255,255,255,0.015)_0%,_transparent_100%)]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">
          What is harm reduction?
        </h1>
        <hr className="border-zinc-600 mb-10" />

        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="md:w-1/2 space-y-6 text-lg">
            <p>
              Harm Reduction is an approach aimed at minimizing the negative consequences of risky behaviors rather than focusing solely on eliminating the behavior itself. It recognizes that some people may continue to engage in risky activities, such as substance use, and instead of condemning or punishing them, it seeks to reduce the harm that these activities can cause.
            </p>
            <p>
              This approach includes providing safer alternatives, education, support, and resources to help individuals make healthier choices, stay safe, and improve their overall well-being. Harm reduction is based on the idea that everyone deserves respect and support, and it prioritizes practical solutions that reduce harm, improve health, and save lives, regardless of whether the risky behavior continues or not.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/harm.jpg"
              alt="Harm Reduction Visual"
              className="rounded-lg shadow-lg"
              width={1000}            // Required
            height={1000}  
            />
          </div>
        </div>

        <hr className="border-zinc-600 mb-10" />

        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-8">Before Use</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
            <div className="bg-zinc-800 p-6 rounded-lg shadow  " >
              
              <h2 className="text-xl font-semibold mb-2" >🧪 Use Reagent Test Kits</h2>
              <p>
                Reagents can detect dangerous additives. Test before taking any unknown substance. I recommend buying from this trusted seller:
                <a target="_blank"  rel="noopener noreferrer" href="https://dancesafe.org/shop/"  className="text-blue-200 underline cursor-pointer hover:scale-105"> DanceSafe</a>
              </p>
            </div>
            
            <div className="bg-zinc-800 p-6 rounded-lg shadow ">
              <h2 className="text-xl font-semibold mb-2">🧍 Have a Sober Friend</h2>
              <p>
                Someone present can help if something goes wrong. Never trip or take risky combos alone. You can find someone to talk to when you use at <a target="_blank" href="https://neverusealone.com" rel="noopener noreferrer" className="text-blue-200 underline cursor-pointer"> NeverUseAlone.com</a>
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow ">
              <h2 className="text-xl font-semibold mb-2">📱 Know Who to Call</h2>
              <p>
                Save local emergency numbers and poison control on your phone ahead of time.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow ">
              <h2 className="text-xl font-semibold mb-2">📚 Research effects and interactions</h2>
              <p>
              Know what you&rsquo;re taking, how it works, and what it doesn&rsquo;t mix well with—knowledge reduces risk.
              </p>
            </div>
            
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-8 mt-8   ">During Use</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
            <div className="bg-zinc-800 p-6 rounded-lg shadow  ">
              <h2 className="text-xl font-semibold mb-2">🐢 Go slow</h2>
              <p>
              Give your body time to respond; effects can build, and more isn&rsquo;t always better.
              </p>
            </div>
            
            <div className="bg-zinc-800 p-6 rounded-lg shadow ">
              <h2 className="text-xl font-semibold mb-2">💧 Stay hydrated and nourished</h2>
              <p>
              Sip water and eat something if you can—your body needs support, especially during long sessions.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow ">
              <h2 className="text-xl font-semibold mb-2">⚠️ Be mindful of mixing</h2>
              <p>
              Combining substances (especially depressants or stimulants) can be unpredictable and dangerous.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow ">
              <h2 className="text-xl font-semibold mb-2"> 🎉 Have fun</h2>
              <p>
               Most important of all, have fun. Enjoy the moment, laugh, dance, connect—just stay present and aware.


              </p>
            </div>
            
          </div>
          
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-8 mt-8   ">After Use</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
            <div className="bg-zinc-800 p-6 rounded-lg shadow  ">
              <h2 className="text-xl font-semibold mb-2">🛌 Rest </h2>
              <p>
              Your body and brain need recovery time. Drink water, eat something nourishing, and get good sleep. Even if you feel fine, internal systems are still recalibrating—give yourself a break.
              </p>
            </div>
            
            <div className="bg-zinc-800 p-6 rounded-lg shadow ">
              <h2 className="text-xl font-semibold mb-2">🪞 Reflect on the experience</h2>
              <p>
              Think about how it went—what you enjoyed, what felt off, and what you&rsquo;d do differently next time. Writing it down or talking it out with a friend can help process and integrate the experience.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow ">
              <h2 className="text-xl font-semibold mb-2">🧹 Clean up safely</h2>
              <p>
              Properly dispose of any leftover materials, test kits, or sharps. Keeping your space clean and safe isn&rsquo;t just hygiene, it&rsquo;s self-respect and community care.
              </p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg shadow h">
              <h2 className="text-xl font-semibold mb-2"> 📞 Seek support if needed</h2>
              <p>
               Drugs can be overwhelming especially if its your first time. Whether it&rsquo;s a friend, therapist, or hotline, there&rsquo;s no shame in reaching out. You&rsquo;re not alone.




              </p>
            </div>
            
          </div>
          <hr className="border-zinc-600 mb-10 mt-10" />
          
          
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-8 mt-8   ">Resources</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
            <div className="flex-top ">
            <a target='_blank' href='https://www.reddit.com/r/ReagentTesting/wiki/test_kit_suppliers'>
            <div className="bg-zinc-800 p-6 rounded-lg shadow hover:scale-105 transition-transform h-auto mb-10">
              <h2 className="text-xl font-semibold mb-2">🧪 Get a Reagent Testing Kit</h2>
              <p>
              To test substances safely, you&rsquo;ll need a Reagent Kit.
              </p>
              <p>
              You can order one from a trusted source here: 👉 <span className="text-blue-200 underline cursor-pointer">Reagent Seller list </span>
              </p>
            </div>
            </a>
            <a target="_blank" href="https://dancesafe.org/fentanyl/" >
            <div className="bg-zinc-800 p-6 rounded-lg shadow hover:scale-105 transition-transform h-auto">
              <h2 className="text-xl font-semibold mb-2">⚠️  Get Fentanyl Testing strips</h2>
              <p>
              The leading cause of death of Americans age 18-45 is <span className="text-red-400 font-bold">Fentanyl Overdose</span>. Fentanyl overdose accounts for 70% of drug overdose deaths.
              </p>
              <p>
              Get a strip before you trip <span className="text-blue-200 underline cursor-pointer">Fentanyl Test Strips</span>
              </p>
            </div>
            </a>
            </div>
            
            
            <div className="bg-zinc-800 p-6 rounded-lg shadow transition-transform text-xl h-auto ">
              <h2 className="text-xl font-semibold mb-2">👩‍🔬 How to Test?</h2>
              <p className="mt-2 font-semibold">
              1.  &nbsp;
                <a target='_blank' href='https://www.reddit.com/r/ReagentTesting/wiki/test_kit_suppliers' className="text-blue-200 underline cursor-pointer">Get a test kit.</a>
              </p>
              
              <p className="mt-2 font-semibold ">2. &nbsp;Use a clean, non-metal surface—glass or ceramic is best.</p>
              <p className="mt-2 font-semibold">3. &nbsp;Scrape off a tiny sample. You don&rsquo;t need much.</p>
              <p className="mt-2 font-semibold">4. &nbsp;Drop 1 to 2 drops of reagent on the sample.</p>
              <p className="mt-2 font-semibold">5. &nbsp;Watch the color change for 30 to 60 seconds. Compare it to a <a target="_blank" href="https://dancesafe.org/testing-kit-instructions/" className="text-blue-200 underline cursor pointer">chart</a>.</p>
              <p className="mt-2 font-semibold">6. &nbsp;Use more than one reagent for better accuracy.</p>
            
            </div>
            
            
            </div>
            
            
            </div>
            
      </div>
    </div>
  );
}
