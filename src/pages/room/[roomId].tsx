import { type NextPage } from "next";
import { useRouter } from "next/router";

const RoomId: NextPage = () => {
  const router = useRouter();
  const { routerId } = router.query;

  console.log(routerId);

  return <div></div>;
};

export default RoomId;
