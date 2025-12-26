'use client'

import * as React from 'react'
import {
  IconDashboard,
  IconExclamationCircle,
  IconHistory,
} from '@tabler/icons-react'

// import { NavMain } from '@/components/nav-main'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
// import Image from 'next/image'
import Link from 'next/link'

import { NavMain } from './nav-main'
import { NavUser } from './nav-user'
import Image from 'next/image'

const data = {
  user: {
    name: 'Saulo',
    email: 'saulo@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'Histórico de coletas',
      url: '/dashboard/scraping-history',
      icon: IconHistory,
    },
    {
      title: 'Histórico de erros',
      url: '/dashboard/scraping-erros',
      icon: IconExclamationCircle,
    },
    // {
    //   title: 'Alunos',
    //   url: '/dashboard/students',
    //   icon: IconUsers,
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:p-1.5! flex flex-col gap-1 h-20'
            >
              <Link href='/dashboard'>
                <Image
                  src='/sidebar-logo.png'
                  alt='Morimitsu logo'
                  className='h-14 w-52 object-cover'
                  width={500}
                  height={500}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ email: data.user.email, name: data.user.name }} />
      </SidebarFooter>
    </Sidebar>
  )
}
