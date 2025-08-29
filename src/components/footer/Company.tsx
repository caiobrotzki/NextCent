function Company() {
  const items = ["About us", "Blog", "Contact us", "Pricing", "Testimonials"];

  return (
    <div className="flex flex-col text-white max-w-xs mx-4 sm:mx-0">
      <h1 className="text-[25px] font-bold mb-3">Company</h1>
      <ul className="text-xs grid gap-3">
        {items.map((item, index) => (
          <li key={index} className=" cursor-pointer hover:text-[#3fd344]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Company;
