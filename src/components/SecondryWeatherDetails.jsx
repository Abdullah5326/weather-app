function SecondryWeatherDetails({ children }) {
  return (
    <li className="bg-neutral-800 rounded-lg max-w-40 w-full px-5 py-3 flex flex-col gap-1 justify-between border border-neutral-600">
      {children}
    </li>
  );
}

export default SecondryWeatherDetails;
