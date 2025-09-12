import { useState } from "react";
import AddTripModal from "../../components/Modal/AddTripModal";
import styles from "./AddTripPage.module.css";

const initialTravelPosts = [
  {
    id: 1,
    title: "Փարիզի հմայքը",
    location: "Փարիզ, Ֆրանսիա",
    date: "Հունիսի 15, 2024",
    description:
      "Փարիզը՝ սիրո քաղաքը, զարմանալի է իր ճարտարապետությամբ և հուշարձաններով։",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898666-81f7c87c067d?w=800&q=80",
  },
  {
    id: 2,
    title: "Տոկիոյի ժամանակակից գեղեցկությունը",
    location: "Տոկիո, Ճապոնիա",
    date: "Մարտի 10, 2024",
    description:
      "Տոկիոն ավանդականի և ժամանակակիցի յուրահատուկ համադրություն է։",
    imageUrl:
      "https://images.unsplash.com/photo-1542051841330-84310e7195e2?w=800&q=80",
  },
  {
    id: 3,
    title: "Նոր Զելանդիայի բնական հրաշքները",
    location: "Օքլենդ, Նոր Զելանդիա",
    date: "Հունվարի 22, 2024",
    description:
      "Նոր Զելանդիան անզուգական բնական գեղեցկություն ունի՝ լեռներ, լճեր և անտառներ։",
    imageUrl:
      "https://images.unsplash.com/photo-1559495147-37c2847a9561?w=800&q=80",
  },
];

const AddTripPage = () => {
  const [trips, setTrips] = useState(initialTravelPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTrip = (trip) => {
    setTrips([trip, ...trips]);
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Discover Amazing Journeys</h1>
        <p className={styles.heroSubtitle}>
          Share your travel experiences and explore new destinations around the
          world.
        </p>
        <button
          className={styles.addTripBtn}
          onClick={() => setIsModalOpen(true)}
        >
          Add Your Trip
        </button>
      </section>

      <section className={styles.tripsGrid}>
        {trips.map((trip) => (
          <div key={trip.id} className={styles.tripCard}>
            <img
              src={trip.imageUrl}
              alt={trip.title}
              className={styles.tripImage}
            />
            <div className={styles.tripContent}>
              <h3 className={styles.tripTitle}>{trip.title}</h3>
              <p className={styles.tripLocation}>{trip.location}</p>
              <p className={styles.tripDate}>{trip.date}</p>
              <p className={styles.tripDescription}>{trip.description}</p>
            </div>
          </div>
        ))}
      </section>

      <AddTripModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTrip}
      />
    </div>
  );
};

export default AddTripPage;
