import {  PropsWithChildren, createContext, useContext } from "react";

type Post = {
    id:number;
    title:string;
    content:string;
    user: {
        id: number;
        name: string;
    };
}
type PostCadProps = PropsWithChildren & {
    post : Post;
}

type PostCardContext ={
    post: Post;
}

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

function usePostCardContext(){
    const context = useContext(PostCardContext);
    if(!context){
        throw new Error ('usePostCardContext must be used with a PostCard')
    }
    return context
}

export default function PostCard( {children,post} : PostCadProps) {
    return(
        <PostCardContext.Provider value={{post}}>
            <div className="flex w-[500px] flex-col gap-2 rounded-lg border-white backdrop-brightness-75 py-8 px-16">
                {children}
            </div>
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle(){
    const {post} = usePostCardContext();
    return <h1 className="text-[3rem] mb-12">{post.title}</h1>
}

PostCard.Content = function PostCardContent(){
    const {post} = usePostCardContext();
    return <p className="text-[2rem] leading-relaxed">{post.content}</p>
}
PostCard.User = function PostCardUser(){
    const {post} = usePostCardContext();
    return <p className="text-[2rem] leading-relaxed text-yellow-600">{post.user.name}</p>
}

PostCard.UserWithId = function PostCardUserWithId(){
    const {post} = usePostCardContext();
    return <p className="text-[2rem] leading-relaxed text-yellow-600">({post.user.id}) {post.user.name}</p>
}
PostCard.Buttons = function PostCardButtons(){
    return(
        <div className="flex justify-end gap-4">
            <button className="border-white">Like</button>
            <button className="border-white">Comment</button>
        </div>
    )
}

PostCard.Delete = function PostCardDelete(){
    return(
        <div className="flex justify-end text-red-600">
            <button className="border-white">Delete Post</button>
        </div>
    )
}

