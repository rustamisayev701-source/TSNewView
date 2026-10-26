const products = [
    { id: 1, name: "iPhone 17 Pro", price: 1199, category: "Смартфоны", brand: "Apple", image: "/images/iphone-17-pro.jpg" },
    { id: 2, name: "iPhone 16", price: 799, category: "Смартфоны", brand: "Apple", image: "/images/iphone-16.jpg" },
    { id: 3, name: "Samsung Galaxy S25 Ultra", price: 1299, category: "Смартфоны", brand: "Samsung", image: "/images/s25-ultra.jpg" },
    { id: 4, name: "Samsung Galaxy A56", price: 399, category: "Смартфоны", brand: "Samsung", image: "/images/galaxy-a56.jpg" },
    { id: 5, name: "Xiaomi 15", price: 699, category: "Смартфоны", brand: "Xiaomi", image: "/images/xiaomi-15.jpg" },
    { id: 6, name: "Redmi Note 14 Pro", price: 329, category: "Смартфоны", brand: "Xiaomi", image: "/images/redmi-note-14.jpg" },
    { id: 7, name: "Google Pixel 9 Pro", price: 999, category: "Смартфоны", brand: "Google", image: "/images/pixel-9-pro.jpg" },
    { id: 8, name: "OnePlus 13", price: 899, category: "Смартфоны", brand: "OnePlus", image: "/images/oneplus-13.jpg" },
    { id: 9, name: "Honor Magic7 Pro", price: 1099, category: "Смартфоны", brand: "Honor", image: "/images/honor-magic7.jpg" },
    { id: 10, name: "Nothing Phone (3)", price: 799, category: "Смартфоны", brand: "Nothing", image: "/images/nothing-phone-3.jpg" },

    { id: 11, name: "MacBook Air M4", price: 999, category: "Ноутбуки", brand: "Apple", image: "/images/macbook-air-m4.jpg" },
    { id: 12, name: "MacBook Pro 16 M4 Pro", price: 2499, category: "Ноутбуки", brand: "Apple", image: "/images/macbook-pro-16.jpg" },
    { id: 13, name: "ASUS ROG Strix G16", price: 1599, category: "Ноутбуки", brand: "ASUS", image: "/images/rog-strix-g16.jpg" },
    { id: 14, name: "ASUS Zenbook 14", price: 1099, category: "Ноутбуки", brand: "ASUS", image: "/images/zenbook-14.jpg" },
    { id: 15, name: "Lenovo Legion Pro 5", price: 1699, category: "Ноутбуки", brand: "Lenovo", image: "/images/legion-pro-5.jpg" },
    { id: 16, name: "Lenovo IdeaPad Slim 5", price: 699, category: "Ноутбуки", brand: "Lenovo", image: "/images/ideapad-slim-5.jpg" },
    { id: 17, name: "HP Spectre x360", price: 1399, category: "Ноутбуки", brand: "HP", image: "/images/hp-spectre.jpg" },
    { id: 18, name: "Dell XPS 15", price: 1799, category: "Ноутбуки", brand: "Dell", image: "/images/dell-xps-15.jpg" },
    { id: 19, name: "Acer Nitro V15", price: 899, category: "Ноутбуки", brand: "Acer", image: "/images/acer-nitro-v15.jpg" },
    { id: 20, name: "MSI Katana 15", price: 1199, category: "Ноутбуки", brand: "MSI", image: "/images/msi-katana-15.jpg" },

    { id: 21, name: "iPad Pro 13 M4", price: 1299, category: "Планшеты", brand: "Apple", image: "/images/ipad-pro-13.jpg" },
    { id: 22, name: "iPad Air M3", price: 699, category: "Планшеты", brand: "Apple", image: "/images/ipad-air-m3.jpg" },
    { id: 23, name: "Samsung Galaxy Tab S10+", price: 999, category: "Планшеты", brand: "Samsung", image: "/images/tab-s10-plus.jpg" },
    { id: 24, name: "Xiaomi Pad 7", price: 399, category: "Планшеты", brand: "Xiaomi", image: "/images/xiaomi-pad-7.jpg" },
    { id: 25, name: "Lenovo Tab P12", price: 349, category: "Планшеты", brand: "Lenovo", image: "/images/lenovo-tab-p12.jpg" },

    { id: 26, name: "AirPods Pro 2", price: 249, category: "Наушники", brand: "Apple", image: "/images/airpods-pro-2.jpg" },
    { id: 27, name: "Sony WH-1000XM5", price: 349, category: "Наушники", brand: "Sony", image: "/images/sony-xm5.jpg" },
    { id: 28, name: "Samsung Galaxy Buds3 Pro", price: 249, category: "Наушники", brand: "Samsung", image: "/images/buds3-pro.jpg" },
    { id: 29, name: "JBL Tune 770NC", price: 99, category: "Наушники", brand: "JBL", image: "/images/jbl-tune-770nc.jpg" },
    { id: 30, name: "Nothing Ear", price: 149, category: "Наушники", brand: "Nothing", image: "/images/nothing-ear.jpg" },

    { id: 31, name: "Apple Watch Series 10", price: 399, category: "Смарт-часы", brand: "Apple", image: "/images/apple-watch-10.jpg" },
    { id: 32, name: "Samsung Galaxy Watch7", price: 299, category: "Смарт-часы", brand: "Samsung", image: "/images/watch7.jpg" },
    { id: 33, name: "Huawei Watch GT 5", price: 249, category: "Смарт-часы", brand: "Huawei", image: "/images/huawei-gt5.jpg" },
    { id: 34, name: "Xiaomi Smart Band 9", price: 49, category: "Фитнес-браслеты", brand: "Xiaomi", image: "/images/smart-band-9.jpg" },
    { id: 35, name: "Garmin Forerunner 265", price: 449, category: "Смарт-часы", brand: "Garmin", image: "/images/garmin-265.jpg" },

    { id: 36, name: "Sony PlayStation 5 Slim", price: 499, category: "Игровые консоли", brand: "Sony", image: "/images/ps5-slim.jpg" },
    { id: 37, name: "Xbox Series X", price: 499, category: "Игровые консоли", brand: "Microsoft", image: "/images/xbox-series-x.jpg" },
    { id: 38, name: "Nintendo Switch OLED", price: 349, category: "Игровые консоли", brand: "Nintendo", image: "/images/switch-oled.jpg" },
    { id: 39, name: "PlayStation Portal", price: 199, category: "Игровые устройства", brand: "Sony", image: "/images/ps-portal.jpg" },
    { id: 40, name: "Meta Quest 3", price: 499, category: "VR-гарнитуры", brand: "Meta", image: "/images/meta-quest-3.jpg" },

    { id: 41, name: "Samsung Odyssey G7", price: 599, category: "Мониторы", brand: "Samsung", image: "/images/odyssey-g7.jpg" },
    { id: 42, name: "LG UltraGear 27GP850", price: 349, category: "Мониторы", brand: "LG", image: "/images/lg-ultragear.jpg" },
    { id: 43, name: "Logitech G Pro X Superlight 2", price: 159, category: "Мыши", brand: "Logitech", image: "/images/g-pro-superlight.jpg" },
    { id: 44, name: "Razer DeathAdder V3", price: 69, category: "Мыши", brand: "Razer", image: "/images/deathadder-v3.jpg" },
    { id: 45, name: "Logitech G Pro X TKL", price: 199, category: "Клавиатуры", brand: "Logitech", image: "/images/g-pro-x-tkl.jpg" },

    { id: 46, name: "Canon EOS R50", price: 679, category: "Фотоаппараты", brand: "Canon", image: "/images/canon-eos-r50.jpg" },
    { id: 47, name: "Sony Alpha A6400", price: 899, category: "Фотоаппараты", brand: "Sony", image: "/images/sony-a6400.jpg" },
    { id: 48, name: "DJI Mini 4 Pro", price: 759, category: "Дроны", brand: "DJI", image: "/images/dji-mini-4-pro.jpg" },
    { id: 49, name: "JBL Charge 5", price: 149, category: "Колонки", brand: "JBL", image: "/images/jbl-charge-5.jpg" },
    { id: 50, name: "Anker 737 Power Bank", price: 109, category: "Пауэрбанки", brand: "Anker", image: "/images/anker-737.jpg" }
]

export default products