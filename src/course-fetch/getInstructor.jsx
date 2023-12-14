

export default async function getInstructor() {
    const ApiUrl = process.env.API_URL;
      try {
        const response = await fetch(`${ApiUrl}/api/instructor1`, {
          cache: "no-store",
        });
    
        return response.json()
      } catch (error) {
        console.log(error);
      }
      
    }
    
  