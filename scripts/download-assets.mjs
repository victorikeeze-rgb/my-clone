import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const BASE = "C:/Users/victo/Desktop/my-clone/my-clone/public";

const assets = [
  // Logo and brand
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_logo_white.svg", dest: "images/ZCC_logo_white.svg" },
  { url: "https://www.zangcenter.com/wp-content/themes/aon2022theme/media/facebook-round.svg", dest: "images/facebook-round.svg" },
  { url: "https://www.zangcenter.com/wp-content/themes/aon2022theme/media/AON_Logo_White.svg", dest: "images/AON_Logo_White.svg" },

  // Favicons
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/cropped-zcc_favicon-32x32.png", dest: "seo/favicon-32x32.png" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/cropped-zcc_favicon-192x192.png", dest: "seo/favicon-192x192.png" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/cropped-zcc_favicon-180x180.png", dest: "seo/favicon-180x180.png" },

  // Hero
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/Zangmeister1E1A9490_websize.jpg", dest: "images/hero.jpg" },

  // Service cards
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/1E1A8616-800x533.jpg", dest: "images/service-medical-oncology.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/Zangmeister1E1A9588_websize-800x534.jpg", dest: "images/service-hematology.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2023/08/iStock-1353123922_1100-min-800x529.jpg", dest: "images/service-gynecologic-oncology.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2025/06/HeaderBiTE-800x450.jpg", dest: "images/service-bite-therapy.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/Zangmeister1E1A9431_websize-800x534.jpg", dest: "images/service-specialty-infusion.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/1E1A8479-800x533.jpg", dest: "images/service-diagnostic-imaging.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/Radioligand-Header-951661976-800x167.jpg", dest: "images/service-radioligand-therapy.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/Zangmeister1E1A9526_websize_edit-800x450.jpg", dest: "images/service-molecular-targeted.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/Pathology-iStock-909176662-800x450.jpg", dest: "images/service-pathology.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/1E1A8258-800x533.jpg", dest: "images/service-pharmacy.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/Zangmeister485A4883_websize_call-800x450.jpg", dest: "images/service-care-coordination.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/Zangmeister485A4702_websize-1-800x534.jpg", dest: "images/service-clinical-trials.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/1E1A8080-800x450.jpg", dest: "images/service-financial-support.jpg" },

  // Team headshots
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Tarek-Chidiac_Headshot_231103-640x800.jpg", dest: "images/team-tarek-chidiac.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/11/ZCC_Katherine_Exten_Headshot_20241115-640x800.jpg", dest: "images/team-katherine-exten.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Mark-Knapp_Headshot_231103-640x800.jpg", dest: "images/team-mark-knapp.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Jeanna-Knoble_Headshot_230213-1-640x800.jpg", dest: "images/team-jeanna-knoble.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Sameh-Mikhail_Headshot_231103-640x800.jpg", dest: "images/team-sam-mikhail.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/10/ZCC_Chrisa-Nagel_Headshot_20241026-640x800.jpg", dest: "images/team-christa-nagel.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/10/ZCC_David-OMalley_Headshot_20241026-640x800.jpg", dest: "images/team-david-omalley.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Taral-Patel_Headshot_230911-640x800.jpg", dest: "images/team-taral-patel.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Jorge-Rios_Headshot_231103-640x800.jpg", dest: "images/team-jorge-rios.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Hiral-Shah_Headshot_231019-640x800.jpg", dest: "images/team-hiral-shah.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Kothai-Sundaram_Headshot_231103-640x800.jpg", dest: "images/team-kothai-sundaram.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Emily-Whitman_Headshot_231103-640x800.jpg", dest: "images/team-emily-whitman.jpg" },

  // Blog thumbnails
  { url: "https://www.zangcenter.com/wp-content/uploads/2026/04/Esophageal-Awareness-Image__April-1-2026-1-400x267.jpg", dest: "images/blog-esophageal.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2026/03/Image-for-Fellow-Blog-Post-1__as-of-3.12.2026-1-400x256.jpg", dest: "images/blog-oncology-practice.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2026/03/Image-for-Nutrition-Month-Blog-Post__March-5-2026-1-400x225.jpg", dest: "images/blog-nutrition.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2026/03/National-Colorectal-Cancer-Awareness-Month-Image__for-March-2026-1-400x400.jpg", dest: "images/blog-colorectal.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2026/02/Image-for-Women-Physician-History-Blog-Post-for-Practices__Feb.-2026-1-400x263.jpg", dest: "images/blog-women-physicians.jpg" },
];

async function download(url, dest) {
  const fullDest = path.join(BASE, dest);
  const dir = path.dirname(fullDest);
  mkdirSync(dir, { recursive: true });

  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`SKIP ${url} → ${res.status}`);
    return;
  }
  await pipeline(res.body, createWriteStream(fullDest));
  console.log(`OK   ${dest}`);
}

// Batch 4 at a time
async function downloadAll() {
  const batch = 4;
  for (let i = 0; i < assets.length; i += batch) {
    await Promise.all(assets.slice(i, i + batch).map((a) => download(a.url, a.dest)));
  }
  console.log("Done.");
}

downloadAll().catch(console.error);
