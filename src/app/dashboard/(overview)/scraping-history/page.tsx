import { SiteHeader } from '@/components/core/site-header'
import {
  LogData,
  ScrapingHistoryTable,
} from '@/components/scraping-history/data-table'
import { StudentsFilters } from '@/components/scraping-history/filters'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb'
import Pagination from '@/components/ui/pagination'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Histórico de coletas',
}

const logs: LogData[] = [
  {
    id: 'nRk2QR2sfcpLiJfJ-0',
    date: '23/09',
    status: 'success',
    store: 'Terabyte',
  },
  {
    id: 'nRk2QR2sfcpLiJfJ-1',
    date: '23/09',
    status: 'error',
    store: 'Terabyte',
  },
  {
    id: 'nRk2QR2sfcpLiJfJ-1',
    date: '23/09',
    status: 'error',
    store: 'Terabyte',
  },
  {
    id: 'nRk2QR2sfcpLiJfJ-1',
    date: '23/09',
    status: 'error',
    store: 'Terabyte',
  },
  {
    id: 'nRk2QR2sfcpLiJfJ-1',
    date: '23/09',
    status: 'error',
    store: 'Terabyte',
  },
  {
    id: 'nRk2QR2sfcpLiJfJ-1',
    date: '23/09',
    status: 'error',
    store: 'Terabyte',
  },
  {
    id: 'nRk2QR2sfcpLiJfJ-1',
    date: '23/09',
    status: 'error',
    store: 'Terabyte',
  },
  {
    id: 'nRk2QR2sfcpLiJfJ-1',
    date: '23/09',
    status: 'error',
    store: 'Terabyte',
  },
  {
    id: 'nRk2QR2sfcpLiJfJ-1',
    date: '23/09',
    status: 'error',
    store: 'Terabyte',
  },
]

export default function ScrapingHistory() {
  return (
    <>
      <SiteHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Histórico de coletas</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </SiteHeader>
      <div className='flex flex-1 flex-col'>
        {/* <div className='@container/main flex flex-1 flex-col gap-2'> */}
        {/* <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'> */}
        <div className='p-5 lg:px-6 space-y-6'>
          <StudentsFilters />

          <ScrapingHistoryTable data={logs} />

          <div className='flex w-full items-center justify-center'>
            <Pagination totalPages={10} />
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  )
}
