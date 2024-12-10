import React from "react";

const ErrorNotification = ({ errorMessage }) => {
  return (
    errorMessage && (
      <div style={{ padding: "10px", background: "#f8d7da", textAlign: "center", margin: "10px 0" }}>
        <p style={{ color: "#721c24" }}>
          <strong>Error:</strong> {errorMessage}
        </p>
      </div>
    )
  );
};

export default ErrorNotification;
