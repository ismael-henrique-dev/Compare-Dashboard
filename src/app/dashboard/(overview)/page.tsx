import { SiteHeader } from '@/components/core/site-header'
import { ScrapingSummaryChart } from '@/components/home/chart'
import { RecentCollections } from '@/components/home/recent-collections'
import { SummaryCards } from '@/components/home/summary'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Dashboard() {
  return (
    <>
      <SiteHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </SiteHeader>
      <div className='flex flex-1 flex-col p-5 gap-6'>
        {/* <div className='@container/main flex flex-1 flex-col gap-2'> */}
        {/* <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'> */}
        <SummaryCards />
        <div className='space-y-6'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* O gráfico ocupa 2 colunas */}
            <div className='lg:col-span-2'>
              <ScrapingSummaryChart />
            </div>

            {/* A lista de coletas ocupa 1 coluna */}
            <div className='lg:col-span-1'>
              <RecentCollections />
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  )
}
