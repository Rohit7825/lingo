import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2i28kHe1yOAnDl2QnLdWqdHLe3g"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
