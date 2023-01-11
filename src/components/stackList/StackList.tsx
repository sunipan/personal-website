export const StackList = ({ list }: { list: string[] }) => {
  return (
    <ul className="z-50 flex list-disc flex-row flex-wrap items-center justify-center px-10 font-medium italic text-white opacity-70 md:text-lg">
      {list.map((item, index) => {
        if (index === list.length - 1) return <div key={item + index}>{item}</div>;
        return (
          <div key={item + index}>
            {item}
            <span className="mx-2">•</span>
          </div>
        );
      })}
    </ul>
  );
};
