import PostCard from "../components/postCard"

export default function AdminPage() {
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
                <PostCard.UserWithId/>
                <PostCard.Title/>
                <PostCard.Content/>
                <PostCard.Delete/>
            </PostCard>
        </div>
    )
}