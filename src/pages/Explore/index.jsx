import styles from "./Explore.module.css";

const travelPosts = [
  {
    id: 1,
    title: "Փարիզի հմայքը",
    location: "Փարիզ, Ֆրանսիա",
    date: "Հունիսի 15, 2024",
    description:
      "Փարիզը՝ սիրո քաղաքը, զարմանալի է իր ճարտարապետությամբ և հուշարձաններով։",
    imageUrl: "./src/assets/Paris.jpg",
  },
  {
    id: 2,
    title: "Տոկիոյի ժամանակակից գեղեցկությունը",
    location: "Տոկիո, Ճապոնիա",
    date: "Մարտի 10, 2024",
    description:
      "Տոկիոն ավանդականի և ժամանակակիցի յուրահատուկ համադրություն է։",
    imageUrl: "./src/assets/Tokio.jpg",
  },
  {
    id: 3,
    title: "Նոր Զելանդիայի բնական հրաշքները",
    location: "Օքլենդ, Նոր Զելանդիա",
    date: "Հունվարի 22, 2024",
    description:
      "Նոր Զելանդիան անզուգական բնական գեղեցկություն ունի՝ լեռներ, լճեր և անտառներ։",
    imageUrl: "./src/assets/New Zeiland.jpg",
  },
  {
    id: 4,
    title: "Հին Հռոմի պատմությունը",
    location: "Հռոմ, Իտալիա",
    date: "Օգոստոսի 5, 2023",
    description:
      "Հռոմը՝ հավերժական քաղաքը, լի է պատմական հուշարձաններով և մշակութային ժառանգությամբ։",
    imageUrl: "./src/assets/old-rome.jpg",
  },
  {
    id: 5,
    title: "Սանտորինիի արևածագը",
    location: "Սանտորինի, Հունաստան",
    date: "Հուլիսի 12, 2024",
    description:
      "Սանտորինիի սպիտակ տները և կապույտ գմբեթները իդեալական են հանգստի համար։",
    imageUrl: "./src/assets/Santoini.jpg",
  },
  {
    id: 6,
    title: "Մարաքեշի կոլորիտը",
    location: "Մարաքեշ, Մարոկկո",
    date: "Ապրիլի 25, 2024",
    description:
      "Մարաքեշը հայտնի է իր գունեղ շուկաներով, պարտեզներով և ճարտարապետությամբ։",
    imageUrl: "./src/assets/Marrakesh.jpg",
  },
];

const Explore = () => {
  return (
    <div className={styles.exploreGrid}>
      {travelPosts.map((post) => (
        <div key={post.id} className={styles.travelCard}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardLocation}>{post.location}</p>
            <p className={styles.cardDate}>{post.date}</p>
            <p className={styles.cardDescription}>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;
