const getState = ({ getStore, getActions, setStore }) => {

	return {
	  store: {
		message: null,
		paises: [],
		countries: [],
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
		cities: [],
		selectedCountryCities:[]
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

			login: async (email, password) => {
				try{
					const requestOptions = {

						method: 'POST',
						headers: { 
						'Accept': 'application/json',
						'Content-Type': 'application/json'},
						// mode:"no-cors",
						// credentials: "include",
						body: JSON.stringify(
						{
							"email":email,
							"password":password
						}
						)
					};
					await fetch(process.env.BACKEND_URL + '/api/login', requestOptions)
						.then(response => { 
							console.log(response)
							if (response.status == 200){
								setStore({auth: true})
							}
							return response.json()
						})
						.then(data => {
							localStorage.setItem("token", data.access_token);
							console.log(data)
							return data
						})

						// .catch(error =>  console.error(error));
					}catch (error){
						return error.response;
					}
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
				fetch(process.env.BACKEND_URL + '/api/signup', requestOptions)
				.then(response => { 

						console.log(response.status)
						if (response.status == 200){
							console.log(response)
						}
						return response.json()
					})
					.then(data => {
						console.log(data.msg)
						return data.msg
					  })
	
	
					  .catch(error =>  console.error(error));
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
  
		// loadCityWeather: async (city) => {
		//   try {
		// 	const apiKey = "da3199df336942f8828210302232806";
		// 	const response = await fetch(
		// 	  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
		// 	);
		// 	const data = await response.json();
		// 	return data;
		//   } catch (error) {
		// 	console.error("Error loading city weather data:", error);
		//   }
		// },

		loadCityWeather: (city) => {
			return new Promise(async (resolve, reject) => {
			  try {
				const apiKey = "da3199df336942f8828210302232806";
				const response = await fetch(
				  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
				);
				const data = await response.json();
				resolve(data);
			  } catch (error) {
				console.error("Error loading city weather data:", error);
				reject(error);
			  }
			});
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
		
			const response = await fetch(process.env.BACKEND_URL + '/api/country', requestOptions);
		
			if (response.ok) {
			  console.log('Data saved to database successfully');
			} else {
			  console.error('Error saving data to database');
			}
		  } catch (error) {
			console.error('Error saving data to database:', error);
		  }
		},
  
	
		  
		loadCitiesByCountry: async (countryName) => {
			try {
			  const response = await fetch(process.env.BACKEND_URL + '/api/cities/'+ countryName);
			  const data = await response.json();
				console.log(data.cities)
			 let aux = []
			  for (let city in data.cities) {
					aux.push(city.name)
			  }
			  setStore({ cities:aux });
			  setStore({ selectedCountryCities: data.cities }); // Actualiza el estado 'cities' con los datos recibidos
			} catch (error) {
			  console.error("Error loading cities:", error);
			}
		  },
		  loadCountries: async () => {
			try {
			  const response = await fetch(process.env.BACKEND_URL + '/api/country');
			  const data = await response.json();
		  
			  setStore({ countries: data.countries });
			  console.log(data.countries)
			} catch (error) {
			  console.error("Error loading countries:", error);
			}
		  },
		  deleteCountry: async (countryName) => {
			try {
			  const requestOptions = {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' }
			  };
	
			  const response = await fetch(`${process.env.BACKEND_URL}/api/country/${countryName}`, requestOptions);
			  if (response.ok) {
				console.log('Country deleted successfully');
				// Realiza cualquier otra acción necesaria después de eliminar el país
			  } else {
				console.error('Error deleting country');
			  }
			} catch (error) {
			  console.error('Error deleting country:', error);
			}
		  },
		  processAndSaveImage : async (file, selectedCountry, setImageUrl) => {
			try {
			  const apiUrl = 'https://api.cloudinary.com/v1_1/dbaedcrtl';
			  const apiKey = '447623599368252';
			  const apiSecret = 't5cClrlERz7LBrJ21fLTn97lHgA';
			  const folderName = 'ImagenesPais';
		  
			  const formData = new FormData();
			  formData.append('file', file);
			  formData.append('upload_preset', 'images');
			  formData.append('folder', folderName);
		  
			  const options = {
				method: 'POST',
				body: formData,
			  };
		  
			  const response = await fetch(apiUrl + '/image/upload', options);
		  
			  if (response.ok) {
				console.log('Imagen subida exitosamente');
				const responseData = await response.json();
				const imageUrl = responseData.secure_url;
		  
				console.log('URL de la imagen:', imageUrl);
		  
				const imageData = {
				  country: selectedCountry,
				  imageUrl: imageUrl,
				};
		  
				const saveResponse = await fetch(`${process.env.BACKEND_URL}/api/saveImageUrl`, {
				  method: 'POST',
				  headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(imageData),
				});
		  
				if (saveResponse.ok) {
				  console.log('Imagen guardada en la base de datos');
				} else {
				  console.error('Error al guardar la imagen en la base de datos');
				}
			  } else {
				console.error('Error al subir la imagen');
			  }
			} catch (error) {
			  console.error('Error al subir la imagen:', error);
			}
		  },

	
		  processAndSaveCityImage : async (file, cityName) => {
			try {
			  const apiUrl = 'https://api.cloudinary.com/v1_1/dbaedcrtl';
			  const apiKey = '447623599368252';
			  const apiSecret = 't5cClrlERz7LBrJ21fLTn97lHgA';
			  const folderName = 'ImagenesCiudad';
		  
			  const formData = new FormData();
			  formData.append('file', file);
			  formData.append('upload_preset', 'images');
			  formData.append('folder', folderName);
		  
			  const options = {
				method: 'POST',
				body: formData,
			  };
		  
			  const response = await fetch(apiUrl + '/image/upload', options);
		  
			  if (response.ok) {
				console.log('Imagen subida exitosamente');
				const responseData = await response.json();
				const imageUrl = responseData.secure_url;
		  
				console.log('URL de la imagen:', imageUrl);
		  
				const imageData = {
				  city: cityName,
				  imageUrl: imageUrl,
				};
		  
				const saveResponse = await fetch(`${process.env.BACKEND_URL}/api/saveCityImageUrl`, {
				  method: 'POST',
				  headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(imageData),
				});
		  
				if (saveResponse.ok) {
				  console.log('Imagen de la ciudad guardada en la base de datos');
				} else {
				  console.error('Error al guardar la imagen de la ciudad en la base de datos');
				}
			  } else {
				console.error('Error al subir la imagen');
			  }
			} catch (error) {
			  console.error('Error al subir la imagen:', error);
			}
		  },
		  
		  
		  

		
		  
	  }
	};
  };
  
  
  export default getState;