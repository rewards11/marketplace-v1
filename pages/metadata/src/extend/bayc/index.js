import { getStakedAmountWei } from '../apecoin'

const POOL_ID = 1;

export const extend = async (_chainId, metadata) => {
  const traitCount = metadata.attributes.length

  let isApeCoinStaked = false;
  try {
    const { tokenId } = metadata
    const stakedAmountWei = await getStakedAmountWei({ poolId: POOL_ID, tokenId })
    isApeCoinStaked = stakedAmountWei !== 0
  } catch (error) {
    console.log(error)
  }

  return {
    ...metadata,
    attributes: [
    ...metadata.attributes,
    {
      key: "Trait Count",
      value: traitCount,
      kind: "string",
    },
    {
      key: "ApeCoin Staked",
      value: isApeCoinStaked ? "Yes" : "No",
      kind: "string",
    },
    ],
  };
};
