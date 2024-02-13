import { Link } from 'react-router-dom'
import './post.css'


export default function Post(props) {

  const {id,image,postCast1,postCast2,postTitle,postDate,postDesc,} = props.data;


  return (

  <Link  to={`/post/:${id}`}>
    <div className='post'>
    <img className='postImg' src={image} alt='Post Image'
    ></img>
    <div className='postInfo'>
      <div className='PostCats'>
          <span className='postCat'>{postCast1}</span>
          <span className='postCat'>{postCast2}</span>
      </div>
      <span className='postTitle'>{postTitle}</span>
      <hr/>
      <span className='postDate'>{postDate}</span> 
    </div>
    <p className='postDesc'>{postDesc}</p>
    </div>
   </Link> 



  )
}
