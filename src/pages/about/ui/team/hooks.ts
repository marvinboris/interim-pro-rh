import { TeamMember } from "@types";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTeam() {
  const [loading, setLoading] = React.useState(false);
  const [team, setTeam] = React.useState<TeamMember[]>();

  React.useEffect(() => {
    const handle = async () => {
      setLoading(true);
      try {
        setTeam([
          {
            id: uuidv4(),
            name: "Anna Kovalenkova",
            job: `Head of Phuket office 
                International Investment Department`,
            photo: "/images/5c9816c6fee8642c601631facc73367b.png",
          },
          {
            id: uuidv4(),
            name: "Victoria Soshkina",
            job: `Senior Consultant 
                International Investment Department 
                `,
            photo: "/images/0f5593a781376b29fa5563177301c78a.png",
          },
          {
            id: uuidv4(),
            name: "Zheneveva Borovskaia",
            job: `Senior consultant 
                International Investment Department`,
            photo: "/images/cbf9218a7f99e6bdeb2e99476246ff81.png",
          },
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    handle();
  }, []);

  return { loading, team };
}
