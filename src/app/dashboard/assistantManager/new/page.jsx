import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import React from 'react'

const AssistantManagerEditPage = () => {
  return (
    <>
    <PageHeader>New Assistant</PageHeader>
    <Spacer height={70} />
    <AssistantCreateForm />
    <Spacer />
  </>
  )
}

export default AssistantManagerEditPage