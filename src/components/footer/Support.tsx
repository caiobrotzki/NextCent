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
      <h1 className="text-[25px] font-bold mb-3">Support</h1>
      <ul className="text-xs grid gap-3">
        {items.map((item, index) => (
          <li key={index} className="over:text-[#3fd344] cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Support;
