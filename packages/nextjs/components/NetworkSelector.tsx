import { Button } from './ui/button'

export interface Network {
  id: string
  name: string
  chainId: number
  logo: string
  isTestnet?: boolean
  gasToken: string
}

const NETWORKS: Network[] = [
  {
    id: 'ethereum',
    name: 'Ethereum Mainnet',
    chainId: 1,
    logo: '🔷',
    gasToken: 'ETH'
  },
  {
    id: 'polygon',
    name: 'Polygon',
    chainId: 137,
    logo: '🟣',
    gasToken: 'MATIC'
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum One',
    chainId: 42161,
    logo: '🔵',
    gasToken: 'ETH'
  },
  {
    id: 'optimism',
    name: 'Optimism',
    chainId: 10,
    logo: '🔴',
    gasToken: 'ETH'
  },
  {
    id: 'base',
    name: 'Base',
    chainId: 8453,
    logo: '🔷',
    gasToken: 'ETH'
  },
  {
    id: 'sepolia',
    name: 'Sepolia Testnet',
    chainId: 11155111,
    logo: '🔷',
    isTestnet: true,
    gasToken: 'SepoliaETH'
  },
  {
    id: 'mumbai',
    name: 'Polygon Mumbai',
    chainId: 80001,
    logo: '🟣',
    isTestnet: true,
    gasToken: 'MATIC'
  }
]

interface NetworkSelectorProps {
  selectedNetwork: Network
  onNetworkChange: (network: Network) => void
}

export const NetworkSelector = ({ selectedNetwork, onNetworkChange }: NetworkSelectorProps) => {
  return (
    <select
      value={selectedNetwork.id}
      onChange={(e) => {
        const network = NETWORKS.find(n => n.id === e.target.value)
        if (network) onNetworkChange(network)
      }}
      className="h-12 px-3 border border-border/50 rounded-md bg-background text-foreground"
    >
      {NETWORKS.map((network) => (
        <option key={network.id} value={network.id}>
          {network.logo} {network.name} ({network.gasToken})
        </option>
      ))}
    </select>
  )
}

export { NETWORKS }
export default NetworkSelector
