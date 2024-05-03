import { getTestimonies } from "@/data/testimonies";
import { Testimony } from "@types";
import React from "react";

export default function useTestimonies() {
  const [loading, setLoading] = React.useState(false);
  const [testimonies, setTestimonies] = React.useState<Testimony[]>();

  React.useEffect(() => {
    const handle = async () => {
      setLoading(true);

      try {
        const testimonies = await getTestimonies();
        setTestimonies(testimonies);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    handle();
  }, []);

  return { testimonies, loading };
}
