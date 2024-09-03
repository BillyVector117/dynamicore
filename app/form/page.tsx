'use client'
import React, { useState, FormEvent } from 'react';
import styles from './form.module.css';

interface SubmittedData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email) {
      setSubmittedData({ name, email });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.mainForm} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name:
          <input
            className={styles.inputField}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your nombre"
          />
        </label>
        <label className={styles.formLabel}>
          Email:
          <input
            className={styles.inputField}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <button className={styles.btn} type="submit">Send</button>
      </form>
      {submittedData && (
        <div>
          <h3 className={styles.titleForm}>Entered data:</h3>
          <p className={styles.formLabel}>Name: {submittedData.name}</p>
          <p className={styles.formLabel}>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
