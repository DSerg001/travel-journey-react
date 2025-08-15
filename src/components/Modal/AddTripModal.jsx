import { useState, useEffect, useContext } from "react";
import styles from "./AddTripModal.module.css";
import { AuthContext } from "../../context/authContext";

const initialFormState = {
  title: "",
  location: "",
  date: "",
  description: "",
  imageFile: null,
  imagePreview: "",
};

const AddTripModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const { setJournal } = useContext(AuthContext);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormState);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        imagePreview: file ? URL.createObjectURL(file) : "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Required";
    if (!formData.location) newErrors.location = "Required";
    if (!formData.date) newErrors.date = "Required";
    if (!formData.description) newErrors.description = "Required";
    if (!formData.imageFile) newErrors.imageFile = "Required";
    return newErrors;
  };

  const handleAdd = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd({ ...formData, id: Date.now() });
    setFormData(initialFormState);
    setJournal((prev) => [...prev, formData]);
    setErrors({});
    onClose();
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setErrors({});
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleCancel();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalContent}>
        <h2>Add New Trip</h2>

        <input
          type="file"
          name="imageFile"
          accept="image/*"
          onChange={handleChange}
        />
        {errors.imageFile && (
          <span className={styles.error}>{errors.imageFile}</span>
        )}

        {formData.imagePreview && (
          <img
            src={formData.imagePreview}
            alt="Preview"
            className={styles.preview}
          />
        )}

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span className={styles.error}>{errors.title}</span>}

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        {errors.location && (
          <span className={styles.error}>{errors.location}</span>
        )}

        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <span className={styles.error}>{errors.date}</span>}

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && (
          <span className={styles.error}>{errors.description}</span>
        )}

        <div className={styles.modalButtons}>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddTripModal;
