import Paris from "../assets/Paris.jpg";
import Tokio from "../assets/Tokio.jpg";
import NewZealand from "../assets/New Zeiland.jpg";
import OldRome from "../assets/old-rome.jpg";
import Santorini from "../assets/Santoini.jpg";
import Marrakesh from "../assets/Marrakesh.jpg";
import London from "../assets/London.jpg";
import Barcelona from "../assets/Barcelona.jpg";
import Cairo from "../assets/Cairo.jpg";
import Venice from "../assets/Venice.jpg";
import Prague from "../assets/Prague.jpg";
import Bangkok from "../assets/Bangkok.jpg";

const travelPosts = [
  {
    id: 1,
    title: "Փարիզի հմայքը",
    location: "Փարիզ, Ֆրանսիա",
    date: "Հունիսի 15, 2024",
    description:
      "Փարիզը՝ սիրո քաղաքը, զարմանալի է իր ճարտարապետությամբ և հուշարձաններով։",
    imageUrl: Paris,
    views: 324, // <-- դիտումների քանակ
  },
  {
    id: 2,
    title: "Տոկիոյի ժամանակակից գեղեցկությունը",
    location: "Տոկիո, Ճապոնիա",
    date: "Մարտի 10, 2024",
    description:
      "Տոկիոն ավանդականի և ժամանակակիցի յուրահատուկ համադրություն է։",
    imageUrl: Tokio,
    views: 412,
  },
  {
    id: 3,
    title: "Նոր Զելանդիայի բնական հրաշքները",
    location: "Օքլենդ, Նոր Զելանդիա",
    date: "Հունվարի 22, 2024",
    description:
      "Նոր Զելանդիան անզուգական բնական գեղեցկություն ունի՝ լեռներ, լճեր և անտառներ։",
    imageUrl: NewZealand,
    views: 287,
  },
  {
    id: 4,
    title: "Հին Հռոմի պատմությունը",
    location: "Հռոմ, Իտալիա",
    date: "Օգոստոսի 5, 2023",
    description:
      "Հռոմը՝ հավերժական քաղաքը, լի է պատմական հուշարձաններով և մշակութային ժառանգությամբ։",
    imageUrl: OldRome,
    views: 198,
  },
  {
    id: 5,
    title: "Սանտորինիի արևածագը",
    location: "Սանտորինի, Հունաստան",
    date: "Հուլիսի 12, 2024",
    description:
      "Սանտորինիի սպիտակ տները և կապույտ գմբեթները իդեալական են հանգստի համար։",
    imageUrl: Santorini,
    views: 350,
  },
  {
    id: 6,
    title: "Մարաքեշի կոլորիտը",
    location: "Մարաքեշ, Մարոկկո",
    date: "Ապրիլի 25, 2024",
    description:
      "Մարաքեշը հայտնի է իր գունեղ շուկաներով, պարտեզներով և ճարտարապետությամբ։",
    imageUrl: Marrakesh,
    views: 275,
  },
  {
    id: 7,
    title: "Լոնդոնի շքեղությունը",
    location: "Լոնդոն, Մեծ Բրիտանիա",
    date: "Սեպտեմբերի 10, 2024",
    description:
      "Լոնդոնը համադրում է պատմություն և ժամանակակից մշակույթը՝ իր թագավորական պալատներով և ժամանակակից ցուցասրահներով։",
    imageUrl: London,
    views: 422,
  },
  {
    id: 8,
    title: "Բարսելոնայի գույնը",
    location: "Բարսելոնա, Իսպանիա",
    date: "Հոկտեմբերի 5, 2024",
    description:
      "Բարսելոնան հայտնի է Գաուդիի ճարտարապետությամբ, գեղեցիկ փողոցներով և ծովափնյա հանգստավայրերով։",
    imageUrl: Barcelona,
    views: 310,
  },
  {
    id: 9,
    title: "Կահիրեի հնագիտական առեղծվածները",
    location: "Կահիրե, Եգիպտոս",
    date: "Նոյեմբերի 12, 2024",
    description:
      "Կահիրեն հնագիտական հարստությամբ է հայտնի՝ հիացնող պիրամիդներով և հին քաղաքային կառույցներով։",
    imageUrl: Cairo,
    views: 280,
  },
  {
    id: 10,
    title: "Վենետիկի ջրային երջանկությունը",
    location: "Վենետիկ, Իտալիա",
    date: "Մարտի 18, 2025",
    description:
      "Վենետիկն իր ջրանցքներով, ռոմանտիկ շինություններով և մշակութային ժառանգությամբ է հայտնի։",
    imageUrl: Venice,
    views: 395,
  },
  {
    id: 11,
    title: "Պրահայի միջնադարյան հմայքը",
    location: "Պրահա, Չեխիա",
    date: "Ապրիլի 22, 2025",
    description:
      "Պրահան լի է պատմական կառույցներով, գեղեցիկ հրապարակներով և գոթական ճարտարապետությամբ։",
    imageUrl: Prague,
    views: 260,
  },
  {
    id: 12,
    title: "Բանգկոկի կոլորիտը",
    location: "Բանգկոկ, Թաիլանդ",
    date: "Փետրվարի 20, 2025",
    description:
      "Բանգկոկը գունեղ քաղաք է, հայտնի իր շուկաներով, տաճարներով և փողոցային ուտեստներով։",
    imageUrl: Bangkok,
    views: 310,
  },
];

export default travelPosts;
