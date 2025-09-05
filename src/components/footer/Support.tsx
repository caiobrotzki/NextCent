function Support() {
  const items = [
    "Help center",
    "Terms of service",
    "Legal",
    "Privacy policy",
    "Status",
  ];

  return (
    <div className="flex flex-col text-white max-w-xs mx-4 sm:mx-0">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Support</h1>
      <ul className="text-sm sm:text-xs grid gap-2 sm:gap-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-[#3fd344] transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Support;
