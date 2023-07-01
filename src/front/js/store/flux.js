

// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 	  store: {
// 		message: null,
// 		demo: [
// 		  {
// 			title: "FIRST",
// 			background: "white",
// 			initial: "white"
// 		  },
// 		  {
// 			title: "SECOND",
// 			background: "white",
// 			initial: "white"
// 		  }
// 		],
// 		options: [],
// 		weatherData: null
// 	  },
// 	  actions: {
// 		exampleFunction: () => {
// 		  getActions().changeColor(0, "green");
// 		},
  
// 		loadSomeData: async () => {
// 		  try {
// 			const response = await fetch("https://restcountries.com/v2/all");
// 			const data = await response.json();
  
// 			const countriesWithDetails = await Promise.all(
// 			  data.map(async (country) => {
// 				const response = await fetch(`https://restcountries.com/v2/name/${country.name}`);
// 				const details = await response.json();
// 				return {
// 				  ...country,
// 				  details: details[0]
// 				};
// 			  })
// 			);
  
// 			setStore({ paises: countriesWithDetails });
// 		  } catch (error) {
// 			console.error("Error loading country details:", error);
// 		  }
// 		},
  
// 		getMessage: async () => {
// 		  try {
// 			const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
// 			const data = await resp.json();
// 			setStore({ message: data.message });
// 			return data;
// 		  } catch (error) {
// 			console.log("Error loading message from backend", error);
// 		  }
// 		},
  
// 		changeColor: (index, color) => {
// 		  const store = getStore();
// 		  const demo = store.demo.map((elm, i) => {
// 			if (i === index) elm.background = color;
// 			return elm;
// 		  });
  
// 		  setStore({ demo: demo });
// 		},
  
// 		loadWeatherData: async (selectedCountry) => {
// 			try {
// 			  const apiKey = "da3199df336942f8828210302232806";
// 			  const response = await fetch(
// 				`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
// 			  );
// 			  const data = await response.json();
// 			  setStore({ weatherData: data });
// 			} catch (error) {
// 			  console.error("Error loading weather data:", error);
// 			}
// 		  },
// 		  loadCityWeather: async (city) => {
// 			try {
// 			  const apiKey = "da3199df336942f8828210302232806";
// 			  const response = await fetch(
// 				`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
// 			  );
// 			  const data = await response.json();
// 			  return data;
// 			} catch (error) {
// 			  console.error("Error loading city weather data:", error);
// 			}
// 		  },
		  

		
		  
// 	  }
// 	};
//   };
  
//   export default getState;
  

// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 	  store: {
// 		message: null,
// 		paises: [],
// 		demo: [
// 		  {
// 			title: "FIRST",
// 			background: "white",
// 			initial: "white"
// 		  },
// 		  {
// 			title: "SECOND",
// 			background: "white",
// 			initial: "white"
// 		  }
// 		],
// 		options: [],
// 		weatherData: null
// 	  },
// 	  actions: {
// 		exampleFunction: () => {
// 		  getActions().changeColor(0, "green");
// 		},
  
// 		loadSomeData: async () => {
// 		  try {
// 			const response = await fetch("https://restcountries.com/v2/all");
// 			const data = await response.json();
  
// 			const countriesWithDetails = await Promise.all(
// 			  data.map(async (country) => {
// 				const response = await fetch(`https://restcountries.com/v2/name/${country.name}`);
// 				const details = await response.json();
// 				return {
// 				  ...country,
// 				  details: details[0]
// 				};
// 			  })
// 			);
  
// 			setStore({ paises: countriesWithDetails });
// 		  } catch (error) {
// 			console.error("Error loading country details:", error);
// 		  }
// 		},
  
// 		getMessage: async () => {
// 		  try {
// 			const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
// 			const data = await resp.json();
// 			setStore({ message: data.message });
// 			return data;
// 		  } catch (error) {
// 			console.log("Error loading message from backend", error);
// 		  }
// 		},
  
// 		changeColor: (index, color) => {
// 		  const store = getStore();
// 		  const demo = store.demo.map((elm, i) => {
// 			if (i === index) elm.background = color;
// 			return elm;
// 		  });
  
// 		  setStore({ demo: demo });
// 		},
  
// 		loadWeatherData: async (selectedCountry) => {
// 		  try {
// 			const apiKey = "da3199df336942f8828210302232806";
// 			const response = await fetch(
// 			  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
// 			);
// 			const data = await response.json();
// 			setStore({ weatherData: data });
// 		  } catch (error) {
// 			console.error("Error loading weather data:", error);
// 		  }
// 		},
  
// 		loadCityWeather: async (city) => {
// 		  try {
// 			const apiKey = "da3199df336942f8828210302232806";
// 			const response = await fetch(
// 			  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
// 			);
// 			const data = await response.json();
// 			return data;
// 		  } catch (error) {
// 			console.error("Error loading city weather data:", error);
// 		  }
// 		},
  
// 		processAndSaveImage: async (file, selectedCountry) => {
// 		  // Realiza las acciones necesarias para procesar y guardar la imagen en la base de datos
// 		  // Puedes llamar a funciones en el backend para realizar estas operaciones
// 		  try {
// 			const formData = new FormData();
// 			formData.append("image", file);
// 			formData.append("country", selectedCountry);
  
// 			const response = await fetch(process.env.BACKEND_URL + "/api/upload", {
// 			  method: "POST",
// 			  body: formData
// 			});
  
// 			if (response.ok) {
// 			  // La imagen se guardó exitosamente en la base de datos
// 			  console.log("Image uploaded successfully");
// 			} else {
// 			  // Ocurrió un error al guardar la imagen
// 			  console.error("Error uploading image");
// 			}
// 		  } catch (error) {
// 			console.error("Error uploading image:", error);
// 		  }
// 		},
  
// 		saveDataToDatabase: async (data) => {
// 			try {
// 			  const countryData = {
// 				country_name: data.country.name,
// 				city_name: data.cities[0].name
// 			  };
		  
// 			  const requestOptions = {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(countryData)
// 			  };
		  
// 			  const response = await fetch('https://alejandrorivera2306-orange-giggle-v4jpv57jpvq366vq-3001.preview.app.github.dev/api/country', requestOptions);
		  
// 			  if (response.ok) {
// 				console.log('Data saved to database successfully');
// 			  } else {
// 				console.error('Error saving data to database');
// 			  }
// 			} catch (error) {
// 			  console.error('Error saving data to database:', error);
// 			}
// 		  }
		  
		  
// 	  }
// 	};
//   };
  
//   export default getState;
  
const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		paises: [],
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white"
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white"
		  }
		],
		options: [],
		weatherData: null,
		cities: []
	  },
	  actions: {
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},

		logout: () => {
			console.log("logout")
			setStore({auth: false})
			localStorage.removeItem("token");
		},

		login: (email,password) => {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json'},
				body: JSON.stringify(
				{
					"email":email,
					"password":password
				}
				)
			};
			fetch("https://deborahdobles-animated-xylophone-66jp7rjp4p5c4rvp-3001.preview.app.github.dev/api/login", requestOptions)
				.then(response => { 
					console.log(response.status)
					if (response.status == 200){
						setStore({auth: true})
					}
					return response.json()
				})
				.then(data => {
					localStorage.setItem("token", data.access_token);
					console.log(data)
				});
		},

		signup: (fullname, email, password, nationality, description) => {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json'},
				body: JSON.stringify(
				{
					"fullname":fullname,
					"email":email,
					"password":password,
					"nationality":nationality,
					"description":description
				}
				)
			};
			fetch("https://deborahdobles-animated-xylophone-66jp7rjp4p5c4rvp-3001.preview.app.github.dev/api/signup", requestOptions)
				.then(response => { 
					console.log(response.status)
					if (response.status == 200){
						setStore({auth: true})
					}
					return response.json()
				})
				.then(data => {
					localStorage.setItem("token", data.access_token);
					console.log(data)
				});
		},
  
		loadSomeData: async () => {
		  try {
			const response = await fetch("https://restcountries.com/v2/all");
			const data = await response.json();
  
			const countriesWithDetails = await Promise.all(
			  data.map(async (country) => {
				const response = await fetch(`https://restcountries.com/v2/name/${country.name}`);
				const details = await response.json();
				return {
				  ...country,
				  details: details[0]
				};
			  })
			);
  
			setStore({ paises: countriesWithDetails });
		  } catch (error) {
			console.error("Error loading country details:", error);
		  }
		},
  
		getMessage: async () => {
		  try {
			const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
			const data = await resp.json();
			setStore({ message: data.message });
			return data;
		  } catch (error) {
			console.log("Error loading message from backend", error);
		  }
		},
  
		changeColor: (index, color) => {
		  const store = getStore();
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  setStore({ demo: demo });
		},
  
		loadWeatherData: async (selectedCountry) => {
		  try {
			const apiKey = "da3199df336942f8828210302232806";
			const response = await fetch(
			  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}&aqi=no`
			);
			const data = await response.json();
			setStore({ weatherData: data });
		  } catch (error) {
			console.error("Error loading weather data:", error);
		  }
		},
  
		loadCityWeather: async (city) => {
		  try {
			const apiKey = "da3199df336942f8828210302232806";
			const response = await fetch(
			  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
			);
			const data = await response.json();
			return data;
		  } catch (error) {
			console.error("Error loading city weather data:", error);
		  }
		},
  
		processAndSaveImage: async (file, selectedCountry) => {
		 //falta aqui. 
		  try {
			const formData = new FormData();
			formData.append("image", file);
			formData.append("country", selectedCountry);
  
			const response = await fetch(process.env.BACKEND_URL + "/api/upload", {
			  method: "POST",
			  body: formData
			});
  
			if (response.ok) {
			  // La imagen se guardó exitosamente en la base de datos
			  console.log("Image uploaded successfully");
			} else {
			  // Ocurrió un error al guardar la imagen
			  console.error("Error uploading image");
			}
		  } catch (error) {
			console.error("Error uploading image:", error);
		  }
		},
  
		saveDataToDatabase: async (data) => {
		  try {
			const countryData = {
			  country_name: data.country.name,
			  city_name: data.cities[0].name
			};
		
			const requestOptions = {
			  method: 'POST',
			  headers: { 'Content-Type': 'application/json' },
			  body: JSON.stringify(countryData)
			};
		
			const response = await fetch('https://alejandrorivera2306-orange-giggle-v4jpv57jpvq366vq-3001.preview.app.github.dev/api/country', requestOptions);
		
			if (response.ok) {
			  console.log('Data saved to database successfully');
			} else {
			  console.error('Error saving data to database');
			}
		  } catch (error) {
			console.error('Error saving data to database:', error);
		  }
		},
  
		// loadCitiesByCountry: async (countryName) => {
		// 	try {
		// 	  const response = await fetch(`https://alejandrorivera2306-orange-giggle-v4jpv57jpvq366vq-3001.preview.app.github.dev/api/cities/${countryName}`);
		// 	  const data = await response.json();
		// 	  setStore({ cities: data.countries[0].cities }); // Actualiza el estado 'cities' con los datos recibidos
		// 	} catch (error) {
		// 	  console.error("Error loading cities:", error);
		// 	}
		//   }
		  
		loadCitiesByCountry: async (countryName) => {
			try {
			  const response = await fetch(`https://alejandrorivera2306-orange-giggle-v4jpv57jpvq366vq-3001.preview.app.github.dev/api/cities/${countryName}`);
			  const data = await response.json();
			  setStore({ cities: data.cities }); // Actualiza el estado 'cities' con los datos recibidos
			} catch (error) {
			  console.error("Error loading cities:", error);
			}
		  },
		  loadCountries: async () => {
			try {
			  const response = await fetch("https://alejandrorivera2306-orange-giggle-v4jpv57jpvq366vq-3001.preview.app.github.dev/api/country");
			  const data = await response.json();
		  
			  setStore({ paises: data.countries });
			} catch (error) {
			  console.error("Error loading countries:", error);
			}
		  },
		  
		  
	  }
	};
  };
  
  export default getState;
  