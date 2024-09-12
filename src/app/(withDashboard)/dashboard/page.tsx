import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage =async () => {

  const session = await getServerSession(authOptions)

  console.log(session);
  

  return (

    <div>
   { session?.user && (
   <>
   <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
  <Image
  className="mx-auto rounded-full mt-5"
  src={session?.user?.image}
  width={100}
  height={100}
  alt="a"
  />
</>
   )
 
   }
    </div>
  );
};

export default DashboardPage;
