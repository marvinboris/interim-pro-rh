import { getServices } from "@/data/services";
import { Service } from "@types";
import React from "react";

export default function useServices() {
  const [loading, setLoading] = React.useState(false);
  const [services, setServices] = React.useState<Service[]>();

  React.useEffect(() => {
    const handle = async () => {
      setLoading(true);

      try {
        const services = await getServices();
        setServices(services);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    handle();
  }, []);

  return { services, loading };
}
