import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { useState, useEffect } from "react";
import { createClient } from "contentful";

interface AboutUsTitleSection {
  fields: {
    img1: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    img2: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    img3: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    img4: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    img5: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    content_type: string;
  };
}

export function InfiniteMovingCardsDemo() {
  const [data, setData] = useState<AboutUsTitleSection[]>([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries<AboutUsTitleSection>({
        content_type: "infinityLoopSection",
      });
      console.log(response);
      setData(response.items);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const testimonials = [
    {
      img: `${data[0]?.fields?.img1?.fields?.file?.url}`,
    },
    {
      img: `${data[0]?.fields?.img2?.fields?.file?.url}`,
    },
    {
      img: `${data[0]?.fields?.img3?.fields?.file?.url}`,
    },
    {
      img: `${data[0]?.fields?.img4?.fields?.file?.url}`,
    },
    {
      img: `${data[0]?.fields?.img5?.fields?.file?.url}`,
    },
    {
      img: `${data[0]?.fields?.img1?.fields?.file?.url}`,
    },
  ];
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}
