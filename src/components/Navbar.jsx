export default function Navbar() {
  return (
    <nav className="h-[80px] flex justify-between items-center px-margin max-w-container mx-auto shadow-sm bg-white">
      <h1 className="font-heading text-2xl font-bold text-primary">Snehdeep</h1>

      <div className="hidden md:flex space-x-8">
        <a href="#" className="font-body text-dark hover:text-primary transition">Home</a>
        <a href="#" className="font-body text-dark hover:text-primary transition">Services</a>
        <a href="#" className="font-body text-dark hover:text-primary transition">About</a>
        <a href="#" className="font-body text-dark hover:text-primary transition">Contact</a>
      </div>

      <button className="bg-primary text-white font-body font-semibold px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition">
        Call Now
      </button>
    </nav>
  );
}
