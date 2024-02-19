export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden font-bold bg-blue-800 cursor-default">
      <div className="animate-marquee whitespace-nowrap py-4">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-9xl 2xl:text-6xl">
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-9xl 2xl:text-6xl">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
