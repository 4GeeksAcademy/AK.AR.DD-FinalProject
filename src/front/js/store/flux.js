const apiURL = "https://deborahdobles-animated-xylophone-66jp7rjp4p5c4rvp-3001.preview.app.github.dev"
const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			message: null,
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
			auth: false
		},
		actions: {
			// Use getActions to call a function within a fuction
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
					await fetch(apiURL + '/api/login', requestOptions)
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
				fetch(apiURL + '/api/signup', requestOptions)
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
	
			

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
