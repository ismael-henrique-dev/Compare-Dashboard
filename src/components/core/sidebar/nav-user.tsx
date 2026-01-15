"use client";

import {
  IconDotsVertical,
  IconLogout,
  IconUserEdit,
} from "@tabler/icons-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { useState } from "react";
import { formatInitials } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialog1,
} from "@/components/ui/alert-dialog";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
  };
}) {
  const [open, setOpen] = useState(false);

  const userInitials = formatInitials(user.name);

  const handleLogout = async () => {
    // const response = await logout()
    // if (response.status === 'success') {
    //   toast.success(response.message)
    //   redirect('/login')
    // } else {
    //   toast.error(response.message)
    // }
  };

  const handleRedirectToEditProfilePage = () => {
    setOpen(false);

    redirect("/dashboard/edit-profile");
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <Avatar className="h-8 w-8 rounded-lg grayscale">
                <AvatarFallback className="rounded-lg">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {user.email}
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="top"
            align="end"
            sideOffset={12}
          >
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleRedirectToEditProfilePage}
            >
              <IconUserEdit />
              Alterar dados cadastrais
            </DropdownMenuItem>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onSelect={(e) => e.preventDefault()}
                >
                  <IconLogout />
                  Log out
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialog1
                title={"Realizar logout"}
                description="Realmente deseja realizar o logout?"
                background="red"
                OnClick={handleLogout}
              />
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
