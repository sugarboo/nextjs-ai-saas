import Image from "next/image";

const EmptyState = ({
  description
}: {
  description: string
}) => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-20">
      <div className="relative w-72 h-72">
        <Image
          src="/empty.png"
          alt="Empty"
          fill
        />
      </div>
      <p className="text-center text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
 
export default EmptyState;
