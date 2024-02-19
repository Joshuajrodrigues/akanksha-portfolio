export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full text-xxl overflow-x-hidden font-extrabold bg-blue-900 cursor-default">
      <div className="animate-marquee whitespace-nowrap py-4">
        {items.map((item,index) => {
          return (
            <span key={index} className="mx-4 2xl:text-6xl">
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4">
        {items.map((item,index) => {
          return (
            <span key={index} className="mx-4 2xl:text-6xl">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
