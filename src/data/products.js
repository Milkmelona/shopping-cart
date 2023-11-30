const products = [
    {
        name: "Vega",
        price: "8500",
        alt: "Silver pendant with sapphire",
        id: "aBcDeFgHiJkL",
        quantity: 10,
        number:1,
        description: "The Vega silver pendant boasts a mesmerizing sapphire, adding an air of elegance and sophistication to your ensemble."
    },

    {
        name: "Lyra",
        price: "12500",
        alt: "Diamond-studded rose gold necklace",
        id: "RstUVwXyZaB1",
        quantity: 8,
        number:2,
        description: "Adorn yourself with the Lyra rose gold necklace, featuring a constellation of diamonds for a truly radiant and timeless look."
    },

    {
        name: "Orion",
        price: "19500",
        alt: "Emerald and gold bracelet",
        id: "90AbCdEfGhIjL",
        quantity: 15,
        number:3,
        description: "Wrap your wrist in opulence with the Orion gold bracelet, showcasing vibrant emeralds that reflect the allure of nature's beauty."
    },

    {
        name: "Aquila",
        price: "13500",
        alt: "Amber and copper pendant",
        id: "RstUVwXyZaB2",
        quantity: 7,
        number:4,
        description: "Embrace warmth and style with the Aquila copper pendant, featuring a captivating amber centerpiece for a unique and alluring charm."
    },

    {
        name: "Draco",
        price: "16500",
        alt: "Ruby and white gold necklace",
        id: "RstUVwXyZaB3",
        quantity: 11,
        number:5,
        description: "Make a bold statement with the Draco white gold necklace, adorned with radiant rubies that exude passion and sophistication."
    },

    {
        name: "Sirius",
        price: "11500",
        alt: "Sapphire and platinum bracelet",
        id: "RstUVwXyZaB4",
        quantity: 2,
        number:6,
        description: "Adorn your wrist with the Sirius platinum bracelet, featuring a brilliant sapphire that radiates timeless beauty and elegance."
    },

    {
        name: "Andromeda",
        price: "17500",
        alt: "Diamond-studded rose gold earrings",
        id: "LmNoPqRstUVw",
        quantity: 6,
        number:7,
        description: "Illuminate your look with the Andromeda rose gold earrings, a dazzling display of diamonds that adds a touch of glamour to any occasion."
    },

    {
        name: "Leo",
        price: "11500",
        alt: "Emerald and gold ring",
        id: "3RstUVwXyZaB",
        quantity: 9,
        number:8,
        description: "Embrace regal charm with the Leo gold ring, featuring a vibrant emerald that symbolizes prosperity and eternal love."
    },

    {
        name: "Taurus",
        price: "8000",
        alt: "Sapphire and white gold necklace",
        id: "RstUVwXyZaB5",
        quantity: 13,
        number:9,
        description: "The Taurus white gold necklace exudes sophistication with its sapphire pendant, a symbol of wisdom and celestial beauty."
    },

    {
        name: "Pegasus",
        price: "15500",
        alt: "Pearl and silver bracelet",
        id: "LmNoPqRstUVw",
        quantity: 16,
        number:10,
        description: "Elevate your wrist with the Pegasus silver bracelet, adorned with lustrous pearls that embody timeless elegance and grace."
    },

    {
        name: "Ursa",
        price: "9000",
        alt: "Diamond and platinum ring",
        id: "wXyZaBcD1234",
        quantity: 4,
        number:11,
        description: "The Ursa platinum ring sparkles with diamonds, symbolizing strength and enduring love in a piece of exquisite craftsmanship."
    },
    
    {
        name: "Zeles",
        price: "14500",
        alt: "Aquamarine and gold pendant",
        id: "RstUVwXyZaB6",
        quantity: 12,
        number:12,
        description: "Embrace tranquility with the Zeles gold pendant, featuring a serene aquamarine that captures the essence of calming waters."
    },
    
    {
        name: "Pavo",
        price: "18500",
        alt: "Gold ring, earrings, and bracelet",
        id: "vVsfgzZKsoxP",
        quantity: 5,
        number:13,
        description: "Indulge in opulence with the Pavo gold set, including a ring, earrings, and bracelet, creating a harmonious ensemble of elegance."
    },
    
    {
        name: "Venus",
        price: "10500",
        alt: "Silver and moonstone pendant",
        id: "gHwXyZaBcD12",
        quantity: 17,
        number:14,
        description: "Radiate celestial beauty with the Venus silver pendant, featuring a mesmerizing moonstone that captures the magic of the night sky."
    },
    
    {
        name: "Libra",
        price: "13500",
        alt: "Diamond and rose gold earrings",
        id: "jKlmNoPqRstU",
        quantity: 1,
        number:15,
        description: "Balance elegance and glamour with the Libra rose gold earrings, adorned with diamonds that sparkle with celestial allure."
    },
    
    {
        name: "Aries",
        price: "9500",
        alt: "Ruby and gold bracelet",
        id: "RstUVwXyZaB7",
        quantity: 19,
        number:16,
        description: "Ignite your passion with the Aries gold bracelet, featuring vibrant rubies that symbolize energy, courage, and love."
    },
    
    {
        name: "Perseus",
        price: "17500",
        alt: "Emerald and silver ring",
        id: "LmNoPqRstUVw",
        quantity: 10,
        number: 20,
        number:17,
        description: "Wear the Perseus silver ring with pride, showcasing a vibrant emerald that represents renewal, growth, and enduring beauty."
    },
    
    {
        name: "Cepheus",
        price: "9500",
        alt: "Amethyst and platinum necklace",
        id: "wXyZaBcD1234",
        quantity: 8,
        number:18,
        description: "Adorn your neck with the Cepheus platinum necklace, featuring a majestic amethyst that exudes a regal and enchanting allure."
    },
    
    {
        name: "Cygnus",
        price: "12500",
        alt: "Topaz and silver pendant",
        id: "RstUVwXyZa6c",
        quantity: 14,
        number:19,
        description: "Soar in style with the Cygnus silver pendant, adorned with a captivating topaz that reflects the beauty of the celestial sky."
    },
    
    {
        name: "Leo Minor",
        price: "15500",
        alt: "Sapphire and white gold earrings",
        id: "LmNoPqRstUVw",
        quantity: 7,
        number:20,
        description: "Embrace understated luxury with the Leo Minor white gold earrings, featuring sapphires that evoke a sense of celestial elegance."
    },
    
    {
        name: "Centaurus",
        price: "8000",
        alt: "Garnet and gold bracelet",
        id: "RstUVwXyZ2Bc",
        quantity: 15,
        number:21,
        description: "Wrap your wrist in the warmth of the Centaurus gold bracelet, featuring rich garnets that exude a timeless and earthy charm."
    },
    
    {
        name: "Scorpius",
        price: "14500",
        alt: "Opal and silver ring",
        id: "wXyZaBcD1234",
        quantity: 11,
        number:22,
        description: "Captivate with the Scorpius silver ring, showcasing a stunning opal that mesmerizes with its ever-changing hues and ethereal beauty."
    },
    
    {
        name: "Lepus",
        price: "11500",
        alt: "Emerald and rose gold necklace",
        id: "RstUVwXyZ3Bc",
        quantity: 3,
        number:23,
        description: "Adorn your neckline with the Lepus rose gold necklace, featuring a vibrant emerald that radiates natural beauty and grace."
    },
    
    {
        name: "Cetus",
        price: "8500",
        alt: "Pearl and platinum pendant",
        id: "RstUVwXy3aBc",
        quantity: 13,
        number:24,
        description: "Elevate your style with the Cetus platinum pendant, adorned with lustrous pearls that symbolize purity and timeless elegance."
    },

    {
        name: "Corvus",
        price: "11500",
        alt: "Emerald and white gold earrings",
        id: "uVwXyZaBcD12",
        quantity: 6,
        number:25,
        description: "Embrace sophistication with the Corvus white gold earrings, featuring captivating emeralds that add a touch of luxury to your ensemble."
    },

    {
        name: "Hydra",
        price: "8000",
        alt: "Sapphire and silver pendant",
        id: "LmNoPqRstUVw",
        quantity: 9,
        number:26,
        description: "Dive into elegance with the Hydra silver pendant, adorned with a captivating sapphire that mirrors the depths of the celestial sea."
    },

    {
        name: "Auriga",
        price: "13500",
        alt: "Pearl and rose gold bracelet",
        id: "gHwXyZaBcD12",
        quantity: 4,
        number:27,
        description: "Wrap your wrist in the timeless beauty of the Auriga rose gold bracelet, featuring lustrous pearls that exude grace and sophistication."
    },

    {
        name: "Cancer",
        price: "10500",
        alt: "Diamond and gold ring",
        id: "RstUV3XyZaBc",
        quantity: 8,
        number:28,
        description: "Celebrate love with the Cancer gold ring, adorned with sparkling diamonds that symbolize unity and the enduring nature of true affection."
    },

    {
        name: "Scutum",
        price: "15500",
        alt: "Topaz and platinum necklace",
        id: "jKlmNoPqRstU",
        quantity: 12,
        number:29,
        description: "Adorn your neck with the Scutum platinum necklace, featuring a captivating topaz that adds a touch of celestial brilliance to your style."
    },

    {
        name: "Virgo",
        price: "16500",
        alt: "Opal and white gold pendant",
        id: "wXyZaBcD1234",
        quantity: 5,
        number:30,
        description: "Elevate your look with the Virgo white gold pendant, showcasing a mesmerizing opal that reflects the beauty of celestial radiance."
    },

    {
        name: "Eridanus",
        price: "14500",
        alt: "Aquamarine and silver ring",
        id: "R9tUVwXyZaBc",
        quantity: 7,
        number:31,
        description: "Dive into elegance with the Eridanus silver ring, featuring a captivating aquamarine that mirrors the serenity of crystal-clear waters."
    },

    {
        name: "Altair",
        price: "10500",
        alt: "Platinum engagement ring",
        id: "XyZaBcD123456",
        quantity: 18,
        number:32,
        description: "Celebrate everlasting love with the Altair platinum engagement ring, a symbol of commitment and exquisite craftsmanship."
    },

    {
        name: "Gemini",
        price: "9500",
        alt: "Opal and silver ring",
        id: "wXyZaBcD1234",
        quantity: 14,
        number:5,
        number:33,
        description: "The Gemini silver ring captivates with its opulent opal, creating a mesmerizing play of colors that reflects your dynamic personality."
    },

    {
        name: "Canis",
        price: "18500",
        alt: "Gold necklace with sapphire pendant",
        id: "vVsfgzZKsoxP",
        quantity: 3,
        number:34,
        description: "The Canis gold necklace elegantly captures attention with its sapphire pendant, a timeless piece." 
    },

    {
        name: "Cassiopeia",
        price: "7500",
        alt: "Pearl and silver earrings",
        id: "LmNoPqRstUVw",
        quantity: 3,
        number:35,
        description: "Elevate your style with the Cassiopeia silver earrings, featuring lustrous pearls for a touch of timeless sophistication."
    }
]

export default products;