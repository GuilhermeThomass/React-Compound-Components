import PostCard from "../components/postCard"

export default function UserPage() {
    return(
        <div>
            <PostCard 
                post={{
                    id:1,
                    title:"firs post!",
                    content:"This is my first post on this site!!!",
                    user:{
                        id:1,
                        name:"Thomas"
                    }
                }}
            >
                <PostCard.Title/>
                <PostCard.Content/>
                <PostCard.User/>
                <PostCard.Buttons/>
            </PostCard>
        </div>
    )
}