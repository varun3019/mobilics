import React, { useEffect, useState } from "react";

export const Jobs = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://job-postings1.p.rapidapi.com/?PageNumber=1&PageSize=12',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '14f03fcdc6msh7a7d2a28568abe3p1613e8jsn307a3d7b0472',
              'X-RapidAPI-Host': 'job-postings1.p.rapidapi.com'
            }
          }
        );
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};
