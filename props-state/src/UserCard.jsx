import React from "react";

function UserCard(props) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>Name: {props.name}</h2>
      <p style={styles.text}>Age: {props.age }</p>
      <p style={styles.text}>Location: {props.location }</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    
    textAlign: "center",
    
    backgroundColor: "#f9f9f9",
    margin: "10px auto",
    
  },
  name: {
    
    marginBottom: "8px",
  },
  
};

export default UserCard;
