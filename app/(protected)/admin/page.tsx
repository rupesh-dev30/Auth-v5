"use client";

import { admin } from "@/actions/admin";
import RoleGate from "@/components/auth/RoleGate";
import FormSuccess from "@/components/FormSuccess";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
// import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";
// import { currentRole } from "@/lib/auth";

export default function AdminPage() {
  // const role = useCurrentRole(); // client side check hooks
  // const role = await currentRole(); // server side check lib

  const onServerActionClick = () => {
    admin().then((data) => {
      if(data.error) {
        toast.error(data.error);
      }

      if(data.success) {
        toast.success(data.success);
      }
    })
  }

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route");
      } else {
        toast.error("Forbidden API Route!");
      }
    })
  }

  return (
    <Card className="w-[600px]">
      <CardHeader className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see the content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">ADMIN - ONLY API ROUTE</p>
          <Button onClick={onApiRouteClick}>
            Click to test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">ADMIN - ONLY SERVER ACTION</p>
          <Button onClick={onServerActionClick}>
            Click to test
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
