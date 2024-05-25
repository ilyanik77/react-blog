# React - React Custom Hooks


## React для начинающих

### Installation

```bash
npm install
```

## Start project

```bash
npm start
```

## Start server

```bash
npx json-server -p 3500 -w data/db.json
```

## We add  two Hooks useWindowSize and useFetchAxios

## First step we add new folder hooks and add file useWindowSize

```bash
const [windowSize, setWindowSize] = useState({
  width: undefined,
  height: undefined,
})

```
## After that we add useEffect

```bash
useEffect(() => {
  const handleResize = () => {
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
    })
  }

  handleResize()

  window.addEventListener("resize", handleResize) 
  // we need to stop addEventListener
  const cleanUp = () => {
    window.removeEventListener("resize", handleResize)
  }

  return cleanUp;

}, [])

return windowSize;

```
## Next step import useWindowSize to Layout component 

```bash
import useWindowSize from "./hooks/useWindowSize";

const {width} = useWindowSize()

<Header title="React js Block" width={width}/>

```
## Add to Header icon from https://react-icons.github.io/react-icons/
we need also look at package.json do you have "react-icons"?! 
- npm i react-icons

- import { FaLaptop } from "react-icons/fa";
- import { FaTabletAlt } from "react-icons/fa";
- import { FaMobileAlt } from "react-icons/fa";

```bash
{
  width < 768 ? <FaMobileAlt/>
  : width < 980 ? <FaTabletAlt/>
  : <FaLaptop/>
}

.header svg {
    width: 50px;
    height: 50px;
}
```
## Next step we do some refactoring code in useWindowSize
- we add anonym function

```bash
return return () => window.removeEventListener("resize", handleResize)

```
## Next step Add useFetchAxios Hook
- add file useFetchAxios
- add useState, useEffect
- add axios
- dataUrl
- isMounted
- source

```bash
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAxios = (dataUrl) => {
    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        let isMounted = true;
        const source = axios.CancelToken.source()

        const fetchData = async (url) => {
            setIsLoading(true)
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                })
                if(isMounted){
                    setData(response.data)
                    setFetchError(null)
                }
            } catch (error) {
                if(isMounted){
                    setFetchError(error.message)
                    setData([])
                }
            } finally{
                isMounted && setTimeout( () => setIsLoading(false), 2000)
            }
        }

        fetchData(dataUrl)

        const clearUp = ()=>{
            isMounted = false;
            source.cancel()
        }

        return clearUp;

    }, [dataUrl])

  return {data, fetchError, isLoading}
}

export default useFetchAxios

```
## Nex step add useFetchAxios to App component and remove useEffect -> fetchPosts

```bash
import useFetchAxios from "./hooks/useFetchAxios";

const {date, fetchError, isLoading} = useFetchAxios("http://localhost:3500/posts")

useEffect(() => {
		setPosts(data)
	}, [data])

```
## Add fetchError, isLoading to Home component

```bash
<Route index element={<Home 
    posts={searchResalt}
    fetchError={fetchError}
    isLoading={isLoading}
  />} />
```
## Go to Home component and refactor code

```bash
const Home = ({posts, fetchError, isLoading}) => {
  
  return (
    <main className='home'>
      {isLoading && <p className='statusMs'>Loading posts...</p>}
      {!isLoading && fetchError && <p className='statusMs' style={{color:"red"}}>{fetchError}</p>}

      {!isLoading && !fetchError && 
        (posts.length ? <Feed posts={posts}/>  
        : "<p className='statusMs'>No post to display...</p>")
      }
    </main>
  )
}

```
## Test url add mistake httpp://localhost:3500/posts or http://localhost:3500/post

