export const fetchThronesCharacters = async () => {
    try {
      const response = await fetch("https://thronesapi.com/api/v2/Characters");
      if (!response.ok) throw new Error("Failed to fetch data");
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };
  