import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* HERO */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight">
          The Private Credit Network <br />
          <span className="text-gray-400">
            for the World’s Top Talent
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          A decentralized bank where elite borrowers access capital
          and global lenders fund high-quality loans.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-white text-black hover:bg-gray-200">
            Apply for Loan
          </Button>
          <Button variant="outline">
            Fund Loans
          </Button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-semibold text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold">1. Apply</h3>
            <p className="text-gray-400 mt-2">
              Verified high-potential individuals apply with academic
              and professional credentials.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold">2. Get Rated</h3>
            <p className="text-gray-400 mt-2">
              AI + on-chain scoring determines risk and loan terms.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold">3. Get Funded</h3>
            <p className="text-gray-400 mt-2">
              Global lenders fund loans and earn yield transparently.
            </p>
          </div>
        </div>
      </section>

      {/* BORROWERS */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Built for Exceptional Borrowers
          </h2>

          <p className="mt-4 text-gray-400">
            Targeting top-tier students, founders, and professionals
            from institutions like Ivy League and global equivalents.
          </p>

          <Button className="mt-6 bg-white text-black">
            Start Application
          </Button>
        </div>
      </section>

      {/* LENDERS */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Earn Yield on Human Potential
          </h2>

          <p className="mt-4 text-gray-400">
            Fund curated borrowers with transparent risk scoring and
            on-chain tracking.
          </p>

          <Button variant="outline" className="mt-6">
            Start Funding
          </Button>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="grid md:grid-cols-3 text-center gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold">$12M+</h3>
            <p className="text-gray-400">Loans Funded</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">4.8%</h3>
            <p className="text-gray-400">Default Rate</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">9.2%</h3>
            <p className="text-gray-400">Avg. Yield</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center border-t border-gray-800">
        <h2 className="text-3xl font-semibold">
          Join the Future of Credit
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-white text-black">
            Apply Now
          </Button>
          <Button variant="outline">
            Explore Loans
          </Button>
        </div>
      </section>

    </main>
  );
}