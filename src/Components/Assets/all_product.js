import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Heirloom Tomato Seeds",
    category: "seeds",
    image: p1_img,
    new_price: 199.00,
    old_price: 250.00,
  },
  {
    id: 2,
    name: "Premium Watermelon Seeds",
    category: "seeds",
    image: p2_img,
    new_price: 299.00,
    old_price: 400.00,
  },
  {
    id: 3,
    name: "Aromatic Mint Seeds",
    category: "seeds",
    image: p3_img,
    new_price:199.00,
    old_price: 450.00,
  },
  {
    id: 4,
    name: "Vibrant Sunflower Seeds",
    category: "seeds",
    image: p4_img,
    new_price: 113.00,
    old_price: 250.00,
  },
  {
    id: 5,
    name: "Apple Seeds",
    category: "seeds",
    image: p5_img,
    new_price: 399.00,
    old_price: 450.00,
  },
  {
    id: 6,
    name: "Basil Herbal Seeds",
    category: "seeds",
    image: p6_img,
    new_price: 450.00,
    old_price: 550.00,
  },
  {
    id: 7,
    name: "Mango Seeds",
    category: "seeds",
    image: p7_img,
    new_price: 500.00,
    old_price: 600.00,
  },
  {
    id: 8,
    name: "Carrot Seeds",
    category: "seeds",
    image: p8_img,
    new_price: 150.00,
    old_price: 180.00,
  },
  {
    id: 9,
    name: "Brinjal Seeds",
    category: "seeds",
    image: p9_img,
    new_price: 80.00,
    old_price: 120.00,
  },
  {
    id: 10,
    name: "Rose Seeds",
    category: "seeds",
    image: p10_img,
    new_price: 500.00,
    old_price: 580.00,
  },
  {
    id: 11,
    name: "Marigold Seeds",
    category: "seeds",
    image: p11_img,
    new_price: 100.00,
    old_price: 120.00,
  },
  {
    id: 12,
    name: "Parsley Seeds",
    category: "seeds",
    image: p12_img,
    new_price: 150.00,
    old_price: 170.00,
  },
  {
    id: 13,
    name: "Springler Systems",
    category: "equipments",
    image: p13_img,
    new_price: 1500.00,
    old_price: 2200.00,
  },
  {
    id: 14,
    name: "John Deere Tractor 3036E",
    category: "equipments",
    image: p14_img,
    new_price: 5014999.00,
    old_price: 5020000.00,
  },
  {
    id: 15,
    name: "New Holland Tractor T6.145",
    category: "equipments",
    image: p15_img,
    new_price: 7199999.00,
    old_price: 7700000.00,
  },
  {
    id: 16,
    name: "Massey Ferguson Tractor 240",
    category: "equipments",
    image: p16_img,
    new_price: 2500000.00,
    old_price: 2700000.00,
  },
  {
    id: 17,
    name: "Shredder Machine with Wheel",
    category: "equipments",
    image: p17_img,
    new_price: 32000.00,
    old_price: 35000.00,
  },
  {
    id: 18,
    name: "Tiller Machine",
    category: "equipments",
    image: p18_img,
    new_price: 32000.00,
    old_price: 35000.00,
  },
  {
    id: 19,
    name: "Disc Harrow",
    category: "equipments",
    image: p19_img,
    new_price: 150000.00,
    old_price: 175000.00,
  },
  {
    id: 20,
    name: "CLASS Harvester",
    category: "equipments",
    image: p20_img,
    new_price: 5000000.00,
    old_price: 5500000.00,
  },
  {
    id: 21,
    name: "John Deere Harvester",
    category: "equipments",
    image: p21_img,
    new_price: 6000000.00,
    old_price: 6700000.00,
  },
  {
    id: 22,
    name: "Fertilizer Spreader",
    category: "equipments",
    image: p22_img,
    new_price: 20000.00,
    old_price: 25000.00,
  },
  {
    id: 23,
    name: "Shovel",
    category: "equipments",
    image: p23_img,
    new_price: 1000.00,
    old_price: 1200.00,
  },
  {
    id: 24,
    name: "Hand Tools Bundle",
    category: "equipments",
    image: p24_img,
    new_price: 5000.00,
    old_price: 5500.00,
  },
  {
    id: 25,
    name: "AGRONIO Fertilizer ",
    category: "fertilizers",
    image: p25_img,
    new_price: 1000.00,
    old_price: 1250.00,
  },
  {
    id: 26,
    name: "Bacteria Bio Fertilizer",
    category: "fertilizers",
    image: p26_img,
    new_price: 800.00,
    old_price: 1000.00,
  },
  {
    id: 27,
    name: "Diatomite Silicon Fertilizer",
    category: "fertilizers",
    image: p27_img,
    new_price: 1200.00,
    old_price: 1400.00,
  },
  {
    id: 28,
    name: "Scotts Turf Fertilizer",
    category: "fertilizers",
    image: p28_img,
    new_price: 1000.00,
    old_price:1200.00,
  },
  {
    id: 29,
    name: "Silifert Fertilizer",
    category: "fertilizers",
    image: p29_img,
    new_price: 1000.00,
    old_price: 1150.00,
  },
  {
    id: 30,
    name: "Micronil - FS Fertilizer",
    category: "fertilizers",
    image: p30_img,
    new_price: 1200.00,
    old_price: 1300.00,
  },
  {
    id: 31,
    name: "Micromust Fertilizer",
    category: "fertilizers",
    image: p31_img,
    new_price: 1100.00,
    old_price: 1200.00,
  },
  {
    id: 32,
    name: "Micro Support Fertilizer",
    category: "fertilizers",
    image: p32_img,
    new_price: 1300.00,
    old_price: 1450.00,
  },
  {
    id: 33,
    name: "Humcid Fertilizer",
    category: "fertilizers",
    image: p33_img,
    new_price: 1000.00,
    old_price: 1250.00,
  },
  {
    id: 34,
    name: "UREA Fertilizer",
    category: "fertilizers",
    image: p34_img,
    new_price: 798.00,
    old_price: 900.00,
  },
  {
    id: 35,
    name: "Nutrigen Fertilizer",
    category: "fertilizers",
    image: p35_img,
    new_price: 798.00,
    old_price: 900.00,
  },
  {
    id: 36,
    name: "Biochar Fertilizer",
    category: "fertilizers",
    image: p36_img,
    new_price: 1500.00,
    old_price: 1750.00,
  },
];

export default all_product;
