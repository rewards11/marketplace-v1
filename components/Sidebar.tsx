import * as Accordion from '@radix-ui/react-accordion'
import { FC, MutableRefObject, useState } from 'react'
import AttributeSelector from './filter/AttributeSelector'
import { FiChevronDown } from 'react-icons/fi'
import { useAttributes } from '@reservoir0x/reservoir-kit-ui'
import { styled } from '@stitches/react'

const StyledChevron = styled(FiChevronDown, {
  transition: 'transform',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

type Props = {
  attributes: ReturnType<typeof useAttributes>['data'] | undefined
  refreshData: () => void
  scrollToTop: () => void
}

const Sidebar: FC<Props> = ({ attributes, refreshData, scrollToTop }) => {
  if (attributes && attributes.length === 0) return null
  const [toggle, setToggle] = useState(false);
  return (
    <Accordion.Root
      type="multiple"
      className="sticky top-[91px] mr-4 hidden max-h-[calc(100vh-+91px)] w-min min-w-[300px] max-w-sm overflow-auto border-r-[1px] border-gray-300 pb-12 dark:border-neutral-600 md:block md:w-1/3 "
    >
      {/* <div className='toggl_filtr'> */}
        <div className="filter_point border-b-[1px] border-gray-300 px-6 py-5 text-left text-lg font-semibold transition dark:border-neutral-600 text-white">
          Filters
        </div>
        {/* <div
          className={`trigger ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div> */}
      {/* </div> */}
      {attributes?.map((attribute) => (
        <Accordion.Item
          value={`item-${attribute.key}`}
          key={attribute.key}
          className="overflow-hidden"
        >
          <Accordion.Header className="filter_point flex w-full justify-between border-b-[1px] border-gray-300 dark:border-neutral-600">
            <Accordion.Trigger className="filter_p1 flex w-full items-center justify-between p-5 transition hover:bg-primary-300 dark:hover:bg-primary-900">
              {attribute.key}
              <StyledChevron className="h-5 w-5" aria-hidden />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <AttributeSelector
              attribute={attribute}
              refreshData={refreshData}
              scrollToTop={scrollToTop}
            />
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default Sidebar
