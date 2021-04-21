import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    location.href = "/";
  }, []);

  return null;
}
