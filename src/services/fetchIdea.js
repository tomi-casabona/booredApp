export const fetchIdea = async (filter) => {
  const baseUrl = "/api"; 
  const url = filter ? `${baseUrl}/filter?type=${filter}` : `${baseUrl}/random`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error al obtener la idea:", error);
    throw new Error(`Error al obtener la idea: ${error.message}`);
  }
};
