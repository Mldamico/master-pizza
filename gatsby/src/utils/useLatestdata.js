import { useEffect, useState } from 'react';

export const useLatestdata = () => {
  const [hotSlices, setHotSlices] = useState();
  const [slicemasters, setSlicemasters] = useState();

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query {
          StoreSettings(id: "downtown"){
            name
            sliceMaster{
              name
            }
            hotSlices{
              name
            }
          }
        }
          `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.sliceMaster);
      });
  }, []);

  return { hotSlices, slicemasters };
};
