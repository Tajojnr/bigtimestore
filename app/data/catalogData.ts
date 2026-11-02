export interface ProductItem {
  id: string;
  name: string;
  category: 'solar' | 'pos' | 'biometrics' | 'security' | 'power' | 'tactical';
  wholesalePrice: number;
  retailPrice: number;
  specs: string;
  image: string;
  badge?: string;
}

export const BIGTIME_CATALOG: ProductItem[] = [
  // SOLAR & FANS (using your actual PNGs)
  { id: 'SOL-01', name: '18" Rechargeable Standing Fan (Premium)', category: 'solar', wholesalePrice: 60000, retailPrice: 65000, specs: 'Solar Panel, 2 Bulbs, Remote, USB Port', image: '/18%20Rechargeable%20Standing%20Fan%20(Premium).png', badge: 'Hot Seller' },
  { id: 'SOL-02', name: '18" Solar Standing Fan (Standard)', category: 'solar', wholesalePrice: 52000, retailPrice: 58000, specs: 'Solar Panel, USB, 4-6hrs Backup', image: '/18%20Solar%20Standing%20Fan%20(Standard).png' },
  { id: 'SOL-03', name: '18" Rechargeable Fan (Basic)', category: 'solar', wholesalePrice: 53000, retailPrice: 55000, specs: 'Solar Panel, 2 Bulbs', image: '/18%20Rechargeable%20Fan%20(Basic).png' },
  { id: 'SOL-04', name: 'Lithium Rechargeable Standing Fan 18"', category: 'solar', wholesalePrice: 50000, retailPrice: 60000, specs: 'Remote, 2 Bulbs, Lithium Battery', image: '/Lithium%20Rechargeable%20Standing%20Fan%2018.png' },
  { id: 'SOL-05', name: 'Powerbank Standing Fan (AC/DC)', category: 'solar', wholesalePrice: 28000, retailPrice: 30000, specs: 'AC/DC Dual, Powerbank Powered', image: '/Powerbank%20Standing%20Fan%20(ACDC).png' },
  { id: 'SOL-06', name: 'AC/DC Compact Standing Fan', category: 'solar', wholesalePrice: 25000, retailPrice: 25500, specs: 'Works with Phone + Booster Cable', image: '/ACDC%20Compact%20Standing%20Fan.png', badge: '₦25k Promo' },
  { id: 'SOL-08', name: 'Mini Ceiling Fan (6 Blades)', category: 'solar', wholesalePrice: 15000, retailPrice: 18000, specs: 'AC/DC 6-Blade Cooling', image: '/Mini%20Ceiling%20Fan%20(6%20Blades).png' },
  { id: 'SOL-09', name: 'Mini Ceiling Fan (Compact AC/DC)', category: 'solar', wholesalePrice: 8000, retailPrice: 10000, specs: 'Low-Power AC/DC', image: '/Mini%20Ceiling%20Fan%20(Compact%20ACDC).png' },
  { id: 'SOL-10', name: 'Rechargeable Table Fan', category: 'solar', wholesalePrice: 28000, retailPrice: 30000, specs: 'Dual Lithium Batteries', image: '/Rechargeable%20Table%20Fan.png' },
  { id: 'SOL-11', name: 'Table Rechargeable Fan', category: 'solar', wholesalePrice: 12000, retailPrice: 15000, specs: 'Emergency LED Light', image: '/Table%20Rechargeable%20Fan.png' },
  { id: 'SOL-12', name: 'Vellmax Small Portable Fan', category: 'solar', wholesalePrice: 12000, retailPrice: 13000, specs: 'Remote + LED Lights', image: '/Vellmax%20Small%20Portable%20Fan.png' },
  { id: 'SOL-13', name: '300W Heavy Duty Solar Generator', category: 'solar', wholesalePrice: 170000, retailPrice: 175000, specs: 'Panel, 4 Bulbs, MP3, Radio', image: '/300W%20Heavy%20Duty%20Solar%20Generator300W%20Heavy%20Duty%20Solar%20Generator.png', badge: 'Heavy Duty' },
  { id: 'SOL-14', name: '150W Solar Generator System', category: 'solar', wholesalePrice: 125000, retailPrice: 135000, specs: 'Panel, 4 Bulbs, MP3', image: '/150W%20Solar%20Generator%20System.png' },
  { id: 'SOL-15', name: 'Solar Generator Fan Combo', category: 'solar', wholesalePrice: 110000, retailPrice: 120000, specs: 'Fan + Panel + Bulbs', image: '/Solar%20Generator%20Fan%20Combo.png' },
  { id: 'SOL-16', name: 'Solar Generator Portable Hub', category: 'solar', wholesalePrice: 50000, retailPrice: 55000, specs: 'Radio, MP3, 4 LED Bulbs', image: '/Solar%20Generator%20Portable%20Hub.png' },
  { id: 'SOL-17', name: 'StarTimes Solar Power Kit', category: 'solar', wholesalePrice: 35000, retailPrice: 40000, specs: '2 Panels, 3 Bulbs, Radio', image: '/StarTimes%20Solar%20Power%20Kit.png', badge: 'Popular' },

  // POS & PRINTERS
  { id: 'POS-01', name: 'Moniebook Dual-Screen Business POS', category: 'pos', wholesalePrice: 500000, retailPrice: 505000, specs: 'Complete Store Management System', image: '/Moniebook%20Dual-Screen%20Business%20POS.png', badge: 'Enterprise' },
  { id: 'POS-02', name: 'Moniebook Smart Device Tablet', category: 'pos', wholesalePrice: 484000, retailPrice: 500000, specs: 'Store Operations Terminal', image: '/Moniebook%20Smart%20Device%20Tablet.png' },
  { id: 'POS-03', name: 'HP Colour Printer (A4)', category: 'pos', wholesalePrice: 200000, retailPrice: 220000, specs: 'A4 Colour, Toner Included', image: '/HP%20Colour%20Printer%20(A4).png' },
  { id: 'POS-05', name: 'HPRT A4 Portable Thermal Printer', category: 'pos', wholesalePrice: 120000, retailPrice: 150000, specs: 'A4 Inkless Thermal', image: '/HPRT%20A4%20Portable%20Thermal%20Printer.png', badge: 'Inkless' },
  { id: 'POS-06', name: 'Moniepoint 4G POS Terminal', category: 'pos', wholesalePrice: 25000, retailPrice: 26000, specs: '4G Card Reader, Cardless Cashout', image: '/Moniepoint%204G%20POS%20Terminal.png', badge: 'Best Seller' },

  // BIOMETRICS
  { id: 'BIO-01', name: 'Kojak Damalog Fingerprint Scanner', category: 'biometrics', wholesalePrice: 75000, retailPrice: 85000, specs: 'BVN & NIN Enrollment', image: '/Kojak%20Damalog%20Fingerprint%20Scanner.png', badge: 'NIN Approved' },
  { id: 'BIO-03', name: 'Mini USB Thumbprint Scanner (Belgium)', category: 'biometrics', wholesalePrice: 30000, retailPrice: 35000, specs: 'Compact BVN Reader', image: '/Mini%20USB%20Thumbprint%20Scanner%20(Belgium).png' },

  // SECURITY/CCTV
  { id: 'SEC-01', name: 'AI Dual-Camera Outdoor CCTV', category: 'security', wholesalePrice: 80000, retailPrice: 100000, specs: '2-in-1 Dual Lens, Night Vision, 4G/WiFi', image: '/AI%20Dual-Camera%20Outdoor%20CCTV.png', badge: 'AI Guard' },
  { id: 'SEC-02', name: 'K13 Mini Wireless CCTV Camera', category: 'security', wholesalePrice: 23000, retailPrice: 28000, specs: 'Remote App Monitoring, Night Vision', image: '/K13%20Mini%20Wireless%20CCTV%20Camera.png' },
  { id: 'SEC-03', name: 'HD Wireless Video Security Camera', category: 'security', wholesalePrice: 18000, retailPrice: 20000, specs: 'Full HD, Infrared Night Vision', image: '/HD%20Wireless%20Video%20Security%20Camera.png' },
  { id: 'SEC-04', name: 'Small WiFi Camera Hub', category: 'security', wholesalePrice: 14000, retailPrice: 17000, specs: 'SD Memory Card Slot', image: '/Small%20WiFi%20Camera%20Hub.png' },
  { id: 'SEC-05', name: 'A9 Mini Rechargeable CCTV Camera', category: 'security', wholesalePrice: 14000, retailPrice: 17000, specs: 'Compact HD Battery Camera', image: '/A9%20Mini%20Rechargeable%20CCTV%20Camera.png' },

  // POWER & DATA
  { id: 'PWR-01', name: '100-Port USB Charging Station', category: 'power', wholesalePrice: 120000, retailPrice: 130000, specs: 'Heavy-Duty Multi-Device Charger', image: '/100%20Port%20USB%20Charging%20Station.png', badge: 'Commercial' },
  { id: 'PWR-03', name: '50,000mAh 22.5W Mega Fast Powerbank', category: 'power', wholesalePrice: 30000, retailPrice: 33000, specs: 'High Capacity Power Station', image: '/50,000mAh%2022.5W%20Mega%20Fast%20Powerbank.png', badge: 'Mega Battery' },
  { id: 'PWR-05', name: 'MTN 120GB Super-Fast Data SIM', category: 'power', wholesalePrice: 10000, retailPrice: 11000, specs: '30 Days Validity Nationwide', image: '/MTN%20120GB%20Super-Fast%20Data%20SIM.png', badge: '120GB SIM' },
];
