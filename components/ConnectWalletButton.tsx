import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FC, ReactElement } from 'react'
import { useAccount } from 'wagmi'

type Props = {
  className?: HTMLButtonElement['className']
  children: ReactElement
}

const ConnectWalletButton: FC<Props> = ({ className, children }) => {
  const account = useAccount()

  return (
    <ConnectButton.Custom>
      {({ openConnectModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== 'loading'

        return (
          <div  
            {...((!ready || account.isConnected) && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                display: 'none',
              },
            })}
          >
            {(() => {
              return (
                <button 
                  onClick={openConnectModal}
                  type="button"
                  className={`metaportal_fn_button h-full min-h-[42px] border-none pr-[28px] pl-[28px] dark:border-neutral-600 text-white dark:ring-primary-900 dark:focus:ring-4 ${className}`}
                >
                  {children}
                </button>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default ConnectWalletButton
