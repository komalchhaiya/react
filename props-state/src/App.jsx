import React from 'react';
import UserCard from './UserCard';

export default function App() {
  return (
    <div style={styles.container}>
      <UserCard name="Komal" age={21} location="Rajkot" />
      <UserCard name="Nidhi" age={25} location="Mumbai" />
      <UserCard name="Sneha" age={22} location="Delhi" />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },
};