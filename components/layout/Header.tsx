import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="ESPRIT University Logo"
              width={120}
              height={60}
              priority
              className="h-auto w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

