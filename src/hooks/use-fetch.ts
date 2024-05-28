import { FromData, RequestData, Resource, fetch } from "@/services";
import React from "react";

export function useFetch<T extends RequestData>(props: {
  resource: Resource;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: FromData<T>;
}) {
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<Error>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handle = async () => {
      setLoading(true);

      try {
        const result = await fetch(props);
        setData(result as T);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error as Error);
        setLoading(false);
      }
    };

    handle();
  }, []);

  return { loading, error, data };
}
