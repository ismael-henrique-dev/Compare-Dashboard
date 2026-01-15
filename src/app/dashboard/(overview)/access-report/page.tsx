import { AccessLineChart } from '@/components/access-report/accesses'
import { PageDistributionChart } from '@/components/access-report/page-distribution-chart'
import { Summary } from '@/components/access-report/summary'
import { SiteHeader } from '@/components/core/site-header'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb'
import { Metadata } from 'next'

export default function AccessesReport() {
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
              <BreadcrumbPage>Relatório de acesso</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </SiteHeader>

      <div className='flex flex-1 flex-col p-5 lg:px-6 space-y-6'>
        <Summary />
        <div className='grid lg:grid-cols-[3fr_1fr] gap-6'>
          <AccessLineChart />
          <PageDistributionChart />
        </div>
      </div>
    </>
  )
}
