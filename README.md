## Rahul Goswami

## GitLab Link
- [ ] [Gitlab](https://git.cs.dal.ca/rgoswami/csci_5709_tutorials/-/tree/main/tutorial4?ref_type=heads)

## Deployed Code
- [ ] [Netlify_Link](https://main--splendid-pegasus-febc0f.netlify.app/)

## Source Used
Some of the code is using from my previous codes
- [ ] [Axios_Info](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)

Login.jsx
```
const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(baseURL, {
        username: username,
        password: password,
      });
      navigate(`/profile`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
```
