import React ,{useState}from 'react';
import "./articles.css";
const Articles = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

    const repoUrl = "https://github.com/yourusername/yourrepository"; // Replace with your repository URL
    var count =1;
    const articlesData = [
        {
            id: 1,
            profileImg: "logo192.png",
            profileName: "Noble Tej",
            skills: ["React Native", "Python"],
            title: "Optimization Techniques in Python",
            description: "Optimization Techniques in Python Optimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in Python",
            coverImage: "cover_1.jpg",
            repoUrl: "https://github.com/username/optimization-techniques-python",
            reviewUrl: "https://purpletalk.darwinbox.in/ms/vibe/home/posts/all"
        },
        {
            id: 2,
            profileImg: "logo192.png",
            profileName: "Mahesh",
            skills: ["Pega Developer"],
            title: "Optimization Techniques in Python",
            description: "Optimization Techniques in Python Optimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in Python",
            coverImage: "cover_1.jpg",
            repoUrl: "https://github.com/username/optimization-techniques-python",
            reviewUrl: "https://purpletalk.darwinbox.in/ms/vibe/home/posts/all"
        },
        {
            id: 3,
            profileImg: "logo192.png",
            profileName: "Ravi Tej",
            skills:["React Native", "Java"],
            title: "Optimization Techniques in Python",
            description: "Optimization Techniques in Python Optimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in PythonOptimization Techniques in Python",
            coverImage: "cover_1.jpg",
            repoUrl: "https://github.com/username/optimization-techniques-python",
            reviewUrl: "https://purpletalk.darwinbox.in/ms/vibe/home/posts/all"
        },
        // Add more articles as needed
    ];

       // Handler to update search query
       const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

     // Filtering articles based on search query
     const filteredArticles = articlesData.filter((article) =>
     article.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
 );
  return (
    <div>
        <input className="PostSearchBar" type="text" placeholder="Search.." value={searchQuery} onChange={handleSearch} />
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
  );
}

export default Articles;
