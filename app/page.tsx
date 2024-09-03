import Image from "next/image";
import UserList from "./components/UserList";
export default function Home() {
  const data = [
    { name: "Carlos", age: 25 },
    { name: "Ana", age: 32 },
    { name: "Luis", age: 41 },
    { name: "Marta", age: 28 },
    { name: "Jorge", age: 35 },
    { name: "Lucía", age: 23 },
    { name: "Pedro", age: 54 },
    { name: "Elena", age: 30 },
    { name: "Juan", age: 22 },
    { name: "Sofía", age: 46 },
    { name: "Gabriel", age: 37 },
    { name: "María", age: 40 },
    { name: "Andrés", age: 29 },
    { name: "Laura", age: 33 },
    { name: "Diego", age: 50 },
    { name: "Paula", age: 26 },
    { name: "Raúl", age: 44 },
    { name: "Clara", age: 21 },
    { name: "Alberto", age: 57 },
    { name: "Eva", age: 39 }
  ]

  return (
    <>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative "
          src="/logo.svg"
          alt="Dynamicore Logo"
          width={200}
          height={150}
          priority
        />
      </div>
      <UserList users={data}/>
    </>
  );
}
