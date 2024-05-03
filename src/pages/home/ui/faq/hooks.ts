import { getFaq } from "@/data/faq";
import { FAQ } from "@types";
import React from "react";

export default function useFaq() {
  const [loading, setLoading] = React.useState(false);
  const [faq, setFaq] = React.useState<FAQ[]>();

  React.useEffect(() => {
    const handle = async () => {
      setLoading(true);

      try {
        const faq = await getFaq();
        setFaq(faq);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    handle();
  }, []);

  return { faq, loading };
}
