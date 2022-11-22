export const useHttp = () => {
    const request = (
        url,
        method = `GET`,
        body = null,
        headers = { "Content-Type": "application/json" }
    ) => {
        try { 
            const data = fetch(url, {
              method,
              body,
              headers,
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
                }
                return res.json();
              })
              .then((data) => data);
      
            return data;
          } catch (error) {
            throw error;
          }
    }

    return { request };
}
