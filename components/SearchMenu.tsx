import * as Dialog from '@radix-ui/react-dialog'
import { FC, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiArrowLeft, HiX } from 'react-icons/hi'
import SearchCollections, {
  SearchCollectionsAPISuccessResponse,
} from './SearchCollections'

type Props = {
  communityId?: string
  initialResults?: SearchCollectionsAPISuccessResponse
}

const SearchMenu: FC<Props> = ({ communityId, initialResults }) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="z-10 block p-1.5">
        <FiSearch className={`h-[18px] w-[18px] text-[#fff]`} />
      </Dialog.Trigger>

      <Dialog.Content className="fixed inset-0 z-20 transform bg-white shadow-md dark:bg-black">
        <div className="relative pl-[40px] pr-[40px] pt-[10px] pb-[10px] text-white bg-[#1b0f39]">
          <Dialog.Close
            tabIndex={-1}
            className="absolute left-[24px] top-[27px] z-20"
          >
            <HiArrowLeft className="h-4 w-4" />
          </Dialog.Close>
          <SearchCollections
            communityId={communityId}
            initialResults={initialResults}
            isMobile={true}
            setOpen={setOpen}
          />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default SearchMenu
