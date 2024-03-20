import React ,{useState}from 'react';
import "./articles.css";
import articlesData from '../components/articlesData.json'
const Articles = () => {
    const [PostDetails, setPostDetails] = useState({
        title: '',
        content: '',
        PostImgUrl:'',
        PostUrl:''
      });
    const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostDetails({ ...PostDetails, [name]: value });
      };

   // const repoUrl = "https://github.com/yourusername/yourrepository"; // Replace with your repository URL
    var count =1;
       const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

     // Filtering articles based on search query
     const filteredArticles = articlesData.filter((article) =>
     article.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
 );
 const [isFormOpen, setIsFormOpen] = useState(false);
 const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
};
 const handleAddPost = () =>{

 }
 const postData = {
    PostId: 7,
    UserId: 1,
    title: "Example Post Titl77",
    content: "This is an example post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    PostImgUrl: "http://example.com/postImage.jpg",
    PostUrl: "http://example.com/post",
    PostDate: new Date(),
    PostComments: [
        {
            commentId: 1,
            commentText: "This is a comment777 on the post."
        },
        {
            commentId: 2,
            commentText: "Another comment on the post."
        }
    ],
    PostLike: 10
};
 const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission
    console.log("Submitted:", { postData});
    alert('testing to create1 user \n' + JSON.stringify(postData));

    try {
      const response = await fetch('http://localhost:3002/submitPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      const data = await response.json();
      console.log('Success:', data);
      alert('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create1 user');
    }
    // Reset form fields
    setPostDetails('');
    // Close the form
    setIsFormOpen(false);
};

  return (
    // className="articles-container" style={{ maxHeight: "400px", overflowY: "auto" }}
    <div className='PostPage' >
        <button className="LargeButton" onClick={toggleForm}>Add Post</button>
        {isFormOpen && (
        <div className="PopupForm">
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={PostDetails.title} onChange={handleChange}  />
                <input type="text" placeholder="Description" value={PostDetails.content} onChange={handleChange}  />
                <input type="text" placeholder="Repository URL" value={PostDetails.PostImgUrl} onChange={handleChange}  />
                <input type="text" placeholder="Post URL" value={PostDetails.PostUrl} onChange={handleChange}  />

                <div className="ButtonGroup">
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={toggleForm}>Cancel</button>
                </div>
            </form>
        </div>
    )}
        <input className="PostSearchBar" type="text" placeholder="Search.." value={searchQuery} onChange={handleSearch} />
        <div  className="articles-container">
        { searchQuery === ""? articlesData.map(article => (
            <div className="card">
                <div className="profile">
                    <img src={article.profileImg} alt="Profile Image" />
                    <div>
                        <h2>{article.profileName}</h2>
                        <h2>{article.skills}</h2>
                    </div>
                </div>
                    <h4><b>{article.title}</b></h4>
                    <p className = "articledescript">{article.description}</p>
                <div className="card1">
                    <img src={article.coverImage} alt="Code Review Image" className="card-image"/>
                    <div class="card-content">
                        {/* <p>Repository Link: <a href="https://github.com/username/optimization-techniques-python" target="_blank">https://github.com/username/optimization-techniques-python</a></p> */}
                        <button className="ReviewBtn" onClick={() => window.open(article.repoUrl)}>Review Code</button><span></span>
                        {/* <button className="ReviewBtn" onClick={() => { window.location.href = article.repoUrl}}>Review Code</button><span></span> */}
                        <button className="FeedbackBtn" onClick={() => window.open(article.reviewUrl, '_blank')}>FeedBack</button>
                    </div>
                </div>
                <div className="InteractionStats" >
                        <span className='CountLike'>{count} Like</span > 
                        <span className='Divider'>|</span>
                        <span className='CountComment'> {count} Comment</span>
                </div>
                <div className='InteractionOptions'>
                            <img src="download.jpeg" alt="Profile Image"  /> <span className='Like'>Like</span>
                            <img src="comment1.png" alt="Profile Image" /> <span className='Comment'>Comment</span>
                            <img src="share2.png" alt="Profile Image" /> <span className='Share'>Share</span>
                </div>
            </div>
        )): 
        (
          filteredArticles.map(article => (
            <div className="card">
                <div className="profile">
                    <img src={article.profileImg} alt="Profile Image" />
                    <div>
                        <h2>{article.profileName}</h2>
                        <h2>{article.skills}</h2>
                    </div>
                </div>
                    <h4><b>{article.title}</b></h4>
                    <p>{article.descriptio}</p>
                <div className="card1">
                    <img src={article.coverImage} alt="Code Review Image" className="card-image"/>
                    <div class="card-content">
                        {/* <p>Repository Link: <a href="https://github.com/username/optimization-techniques-python" target="_blank">https://github.com/username/optimization-techniques-python</a></p> */}
                        <button className="ReviewBtn" onClick={() => window.open(article.repoUrl, '_blank')}>Review Code</button><span></span>
                        <button className="FeedbackBtn" onClick={() => window.open(article.reviewUrl, '_blank')}>FeedBack</button>
                    </div>
                </div>
                <div className="InteractionStats" >
                        <span className='CountLike'>{count} Like</span > 
                        <span className='Divider'>|</span>
                        <span className='CountComment'> {count} Comment</span>
                </div>
                <div className='InteractionOptions'>
                            <img src="download.jpeg" alt="Profile Image"  /> <span className='Like'>Like</span>
                            <img src="comment1.png" alt="Profile Image" /> <span className='Comment'>Comment</span>
                            <img src="share2.png" alt="Profile Image" /> <span className='Share'>Share</span>
                </div>
            </div>
            ))
        )}
        </div>
     </div>
  );
}

export default Articles;
