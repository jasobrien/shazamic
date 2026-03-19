/**
 * Aggregates all live product arrays into a single flat list.
 * Each entry is tagged with `path` (the subcategory page) and `listName`.
 * Add new data files here as categories go live.
 */

import { overEar } from "./overEar";
import { inEar } from "./inEar";
import { onEar } from "./onEar";
import { sports } from "./sports";
import { smartphonesAndroid } from "./personal/smartphonesAndroid";
import { smartphonesIphone } from "./personal/smartphonesIphone";
import { laptopsWindows } from "./personal/laptopsWindows";
import { laptopsMacBook } from "./personal/laptopsMacBook";
import { gamingHeadsets } from "./personal/gamingHeadsets";
import { gamingControllers } from "./personal/gamingControllers";
import { doorbells } from "./commonAreas/doorbells";
import { smartLocks } from "./commonAreas/smartLocks";
import { homeCameras } from "./commonAreas/homeCameras";

const sources = [
  { products: overEar,            path: "/personal/headphones/over-ear",      listName: "Over-Ear Headphones" },
  { products: inEar,              path: "/personal/headphones/in-ear",         listName: "In-Ear Earbuds" },
  { products: onEar,              path: "/personal/headphones/on-ear",         listName: "On-Ear Headphones" },
  { products: sports,             path: "/personal/headphones/sports",         listName: "Sports & Active" },
  { products: smartphonesAndroid, path: "/personal/smartphones/android",       listName: "Android Phones" },
  { products: smartphonesIphone,  path: "/personal/smartphones/iphone",        listName: "iPhones" },
  { products: laptopsWindows,     path: "/personal/laptops/windows",           listName: "Windows Laptops" },
  { products: laptopsMacBook,     path: "/personal/laptops/macbook",           listName: "MacBooks" },
  { products: gamingHeadsets,     path: "/personal/gaming-gear/headsets",      listName: "Gaming Headsets" },
  { products: gamingControllers,  path: "/personal/gaming-gear/controllers",   listName: "Controllers" },
  { products: doorbells,          path: "/common/doorbells",                    listName: "Video Doorbells" },
  { products: smartLocks,         path: "/common/smart-locks",                  listName: "Smart Locks" },
  { products: homeCameras,        path: "/common/home-cameras",                 listName: "Home Security Cameras" },
];

export const allProducts = sources.flatMap(({ products, path, listName }) =>
  products.map((p) => ({ ...p, path, listName }))
);
