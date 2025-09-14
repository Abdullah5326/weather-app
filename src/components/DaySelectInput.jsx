function DaySelectInput() {
  return (
    <select
      name="day-options"
      id="day-options"
      className="py-2 bg-neutral-600 rounded-lg px-1 text-center"
    >
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>
  );
}

export default DaySelectInput;
