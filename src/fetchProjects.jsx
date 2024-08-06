import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "wm9eyplov4yv",
  environment: "master",
  accessToken: "YwjJpQ0jCYha4nPenKg3mSI4i9Uc14-_XxVZU9275Eo",
});

// custom hook
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
