import { currentUser } from "@/lib/auth";
import UserInfo from "@/components/UserInfo";

export default async function Server() {
  const user = await currentUser();

  return <UserInfo label="💻 Server component" user={user} />;
}
