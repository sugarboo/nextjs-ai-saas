import Image from "next/image";

const LoadingState = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 h-full">
      <div className="relative w-10 h-10 animate-spin">
        <Image
          src="/logo.png"
          alt="Logo"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Genius is thinking...
      </p>
    </div>
  );
}
 
export default LoadingState;
