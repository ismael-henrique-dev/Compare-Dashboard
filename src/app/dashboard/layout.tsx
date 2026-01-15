
import { AppSidebar } from '@/components/core/sidebar/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const cookieStore = await cookies()
  const userData = cookieStore.get('userData')

  const user = userData ? JSON.parse(userData.value) : null

  return (
    <Suspense>
      <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }
      >
        <AppSidebar variant='sidebar' user={user}/>
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </Suspense>
  )
}
