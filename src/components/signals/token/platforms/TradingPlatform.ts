export interface TradingPlatform {
  id: string;
  name: string;
  icon: string;
  getUrl: (address: string) => string;
}

export const tradingPlatforms: TradingPlatform[] = [
  {
    id: "gmgn",
    name: "GMGN",
    icon: "/trade-gmgn.png",
    getUrl: (address) => `https://t.me/GMGN_sol_bot?start=i_${address}`,
  },
  {
    id: "photon",
    name: "Photon",
    icon: "/trade-photon.png",
    getUrl: (address) =>
      `https://photon-sol.tinyastro.io/en/r/@phanes/${address}`,
  },
  {
    id: "bullx",
    name: "Bullx",
    icon: "/trade-bullx.png",
    getUrl: (address) =>
      `https://bullx.io/terminal?chainId=1399811149&r=QKXBJ87T7E9&address=${address}`,
  },
  {
    id: "banana-gun",
    name: "Banana Gun",
    icon: "/trade-banana-gun.png",
    getUrl: (address) =>
      `https://t.me/BananaGun_bot?start=snp_phanes_${address}`,
  },
  {
    id: "maestro",
    name: "Maestro",
    icon: "/trade-meastro.png",
    getUrl: (address) => `https://t.me/MaestroBuyBot?start=${address}`,
  },
  {
    id: "sol-trading-bot",
    name: "SOL Trading Bot",
    icon: "/trade-sol-trading-bot.png",
    getUrl: (address) => `https://t.me/SolTradingBot?start=${address}`,
  },
];
