/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-useless-constructor */
import { useCallback, useEffect, useState } from "react";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../Button";
import { PostCard } from "../PostCard";
import "./styles.css";

export const Home = () =>{

  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(5)
  const [searchValue, setSearchValue] = useState("")


  const filteredPosts = !!searchValue
    ? posts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    : posts;



  // fetch aqui //função exclusiva 
  // componentDidMount() {
  //   this.loadPosts();
  // }

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {

    const photosAndPosts = await loadPosts();

    setPosts(photosAndPosts.slice(page, postsPerPage))
    setAllPosts(photosAndPosts)
    
  }, []); 


  const loadMorePosts = () => {
    // const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    setPosts([...posts, ...nextPosts])
    setPage(nextPage)

  };
  

  const handeSearch = (e) =>{
    const { value } = e.target;

    setSearchValue(value)
    
  }

useEffect(() => {

  handleLoadPosts(0, postsPerPage);
},[handleLoadPosts, postsPerPage]);


  return (
    <section className="container">
      <input type="text" 
      name="txtSearch" 
      id="txtSearch" 
      placeholder="Search..." 
      onChange = {handeSearch} 
      value={searchValue}/>

      
      <div className="posts">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Button text="Load more posts" action={loadMorePosts} />
    </section>
  );

}

export default Home;
