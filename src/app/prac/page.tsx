export default function Prac() {
  return (
    <div className="h-screen bg-blue-500">
      <div className="h-full grid md:grid-cols-10 grid-rows-4 gap-4 border">
        <div className="bg-red-500 col-span-4 row-span-3"></div>
        <div className="bg-yellow-500 col-span-4 row-span-1">2</div>
        <div className="bg-green-500 col-span-2 row-span-1">3</div>
        <div className="bg-purple-500 col-span-3 row-span-2">4</div>
        <div className="bg-orange-500 col-span-3 row-span-2">5</div>
        <div className="bg-pink-500 col-span-5 row-span-1">6</div>
        <div className="bg-yellow-500 col-span-5 row-span-z">7</div>
      </div>
    </div>
  );
}
