import { EditPerfilForm } from "@/components/forms/edit-profile";
import { Metadata } from "next";
import { SiteHeader } from '@/components/site-header'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: "Alterar dados cadastrais",
};

export default function LoginPage() {
  return (
    <>
      <SiteHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="lg:flex hidden"
                href="/dashboard/scraping-erros"
              >
                Alterar dados cadastrais
              </BreadcrumbLink>
              <BreadcrumbEllipsis className="lg:hidden" />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </SiteHeader>

      <div className="w-full h-full pr-7 pl-7 pt-6 bg-accent">
        <EditPerfilForm />
      </div>
    </>
  );
}
