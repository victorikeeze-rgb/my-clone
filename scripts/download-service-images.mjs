import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/services");

fs.mkdirSync(outDir, { recursive: true });

const images = [
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/1E1A8616-1900x1267.jpg", name: "medical-oncology.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/Zangmeister1E1A9588_websize.jpg", name: "hematology.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2023/08/iStock-1353123922_1100-min.jpg", name: "gynecologic-oncology.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2025/06/HeaderBiTE.jpg", name: "bite-therapy.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/Zangmeister1E1A9431_websize.jpg", name: "specialty-infusion-services.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/1E1A8479-1900x1267.jpg", name: "diagnostic-imaging.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/Radioligand-Header-951661976-1900x396.jpg", name: "radioligand-therapy.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2024/04/Zangmeister1E1A9526_websize_edit.jpg", name: "molecular-targeted-therapy.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/Pathology-iStock-909176662-1920x1080.jpg", name: "pathology.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/1E1A8258-1900x1267.jpg", name: "pharmacy.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/Zangmeister485A4883_websize_call.jpg", name: "care-coordination.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/Zangmeister485A4702_websize-1.jpg", name: "clinical-trials.jpg" },
  { url: "https://www.zangcenter.com/wp-content/uploads/2022/08/1E1A8080-1900x1069.jpg", name: "financial-support.jpg" },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) { console.log(`  skip (exists): ${path.basename(dest)}`); resolve(); return; }
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); console.log(`  ok: ${path.basename(dest)}`); resolve(); });
    }).on("error", (err) => { fs.unlinkSync(dest); reject(err); });
  });
}

for (const img of images) {
  const dest = path.join(outDir, img.name);
  try { await download(img.url, dest); } catch (e) { console.error(`  FAIL: ${img.name} — ${e.message}`); }
}
console.log("Done.");
